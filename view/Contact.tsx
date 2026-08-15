"use client";

import { ContactForm } from "@/view/ContactForm";
import { ContactInfo } from "@/view/ContactInfo";
import { Reveal } from "@/view/Reveal";
import { useLanguage } from "@/model/i18n";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="contact">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">08</span> / 12<span className="rule" />
          {t.contact.sheetLabel}
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">{t.contact.title}</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div">
            <ContactInfo />
          </Reveal>
          <Reveal as="div">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
