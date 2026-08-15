"use client";

import { useState, type FormEvent } from "react";

import { Icon } from "@/view/Icon";
import { businessInfo, PREFERRED_CONTACT_CHOICES, PROJECT_TYPE_CHOICES } from "@/model/data";
import { useLanguage } from "@/model/i18n";
import {
  buildProjectSmsBody,
  initialContactFormValues,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/model/contactForm";

type Status = "idle" | "sent";

export function ContactForm() {
  const { lang, t } = useLanguage();
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values, lang);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const body = buildProjectSmsBody(values, lang);
    const isIOS = /iP(hone|ad|od)/.test(window.navigator.userAgent);
    const separator = isIOS ? "&" : "?";
    window.location.href = `sms:${businessInfo.phoneHref}${separator}body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">
            {t.contactForm.fullName} <span className="req">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
          />
          <span className="err" role="alert">{errors.name}</span>
        </div>
        <div className="field">
          <label htmlFor="phone">
            {t.contactForm.phoneNumber} <span className="req">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
          <span className="err" role="alert">{errors.phone}</span>
        </div>
        <div className="field">
          <label htmlFor="email">
            {t.contactForm.emailAddress} <span className="req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
          />
          <span className="err" role="alert">{errors.email}</span>
        </div>
        <div className="field">
          <label htmlFor="projectType">
            {t.contactForm.projectType} <span className="req">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(event) => update("projectType", event.target.value)}
          >
            <option value="" disabled>
              {t.contactForm.selectOption}
            </option>
            {PROJECT_TYPE_CHOICES.map((choice) => (
              <option key={choice} value={choice}>
                {t.contactForm.projectTypes[choice] ?? choice}
              </option>
            ))}
          </select>
          <span className="err" role="alert">{errors.projectType}</span>
        </div>
        <div className="field full">
          <label htmlFor="location">{t.contactForm.projectLocation}</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder={t.contactForm.locationPlaceholder}
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
          />
        </div>
        <div className="field full">
          <label htmlFor="description">
            {t.contactForm.projectDescription} <span className="req">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            placeholder={t.contactForm.descriptionPlaceholder}
            value={values.description}
            onChange={(event) => update("description", event.target.value)}
          />
          <span className="err" role="alert">{errors.description}</span>
        </div>
        <div className="field full">
          <label id="pref-label">{t.contactForm.preferredContact}</label>
          <div className="radio-row" role="radiogroup" aria-labelledby="pref-label">
            {PREFERRED_CONTACT_CHOICES.map((choice) => (
              <label className="radio-chip" key={choice}>
                <input
                  type="radio"
                  name="preferredContact"
                  value={choice}
                  checked={values.preferredContact === choice}
                  onChange={() => update("preferredContact", choice)}
                />
                {t.contactForm.preferredContactChoices[choice] ?? choice}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-foot">
        <button type="submit" className="btn btn-primary">
          <Icon name="i-arrow" />
          {t.contactForm.submit}
        </button>
        <span className={`form-status${status === "sent" ? " ok" : ""}`} aria-live="polite">
          {status === "sent" ? t.contactForm.sentStatus(businessInfo.contactName) : ""}
        </span>
      </div>
      <p className="form-note">
        {t.contactForm.noteBefore}{" "}
        <a href={`tel:${businessInfo.phoneHref}`} style={{ color: "var(--accent-secondary)" }}>
          {businessInfo.phoneDisplay}
        </a>{" "}
        {t.contactForm.noteMiddle}{" "}
        <a href={businessInfo.instagramUrl} target="_blank" rel="noopener" style={{ color: "var(--accent-secondary)" }}>
          {t.contactForm.instagram}
        </a>
        .
      </p>
    </form>
  );
}
