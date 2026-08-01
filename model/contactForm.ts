import { z } from "zod";

import { PREFERRED_CONTACT_CHOICES, PROJECT_TYPE_CHOICES } from "@/model/data";

export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  description: string;
  preferredContact: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const initialContactFormValues: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  description: "",
  preferredContact: "Phone Call",
};

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your full name."),
  phone: z
    .string()
    .trim()
    .refine((value) => value.replace(/[^0-9]/g, "").length >= 10, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address."),
  projectType: z.enum(PROJECT_TYPE_CHOICES, {
    message: "Select a project type.",
  }),
  location: z.string().trim().optional().default(""),
  description: z.string().trim().min(1, "Describe your project."),
  preferredContact: z.enum(PREFERRED_CONTACT_CHOICES),
});

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const parsed = contactSchema.safeParse(values);
  if (parsed.success) return {};

  const errors: ContactFormErrors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as keyof ContactFormValues | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}

export function buildProjectSmsBody(values: ContactFormValues): string {
  const lines = [
    `New project inquiry from ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Type: ${values.projectType}`,
    values.location ? `Location: ${values.location}` : null,
    `Preferred contact: ${values.preferredContact}`,
    `Details: ${values.description}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}
