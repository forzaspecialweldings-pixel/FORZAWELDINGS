import { z } from "zod";

import { PREFERRED_CONTACT_CHOICES, PROJECT_TYPE_CHOICES } from "@/model/data";
import type { Lang } from "@/model/i18n";
import { ui } from "@/model/i18n";

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

function buildContactSchema(lang: Lang) {
  const messages = ui[lang].contactForm.errors;
  return z.object({
    name: z.string().trim().min(1, messages.name),
    phone: z
      .string()
      .trim()
      .refine((value) => value.replace(/[^0-9]/g, "").length >= 10, messages.phone),
    email: z.string().trim().email(messages.email),
    projectType: z.enum(PROJECT_TYPE_CHOICES, {
      message: messages.projectType,
    }),
    location: z.string().trim().optional().default(""),
    description: z.string().trim().min(1, messages.description),
    preferredContact: z.enum(PREFERRED_CONTACT_CHOICES),
  });
}

export function validateContactForm(values: ContactFormValues, lang: Lang = "en"): ContactFormErrors {
  const parsed = buildContactSchema(lang).safeParse(values);
  if (parsed.success) return {};

  const errors: ContactFormErrors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0] as keyof ContactFormValues | undefined;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}

export function buildProjectSmsBody(values: ContactFormValues, lang: Lang = "en"): string {
  const { sms, projectTypes, preferredContactChoices } = ui[lang].contactForm;
  const projectType = projectTypes[values.projectType] ?? values.projectType;
  const preferredContact = preferredContactChoices[values.preferredContact] ?? values.preferredContact;
  const lines = [
    `${sms.inquiryFrom} ${values.name}`,
    `${sms.phone}: ${values.phone}`,
    `${sms.email}: ${values.email}`,
    `${sms.type}: ${projectType}`,
    values.location ? `${sms.location}: ${values.location}` : null,
    `${sms.preferredContact}: ${preferredContact}`,
    `${sms.details}: ${values.description}`,
  ].filter((line): line is string => Boolean(line));

  return lines.join("\n");
}
