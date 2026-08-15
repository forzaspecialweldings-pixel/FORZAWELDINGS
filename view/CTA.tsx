"use client";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { businessInfo } from "@/model/data";
import { useLanguage } from "@/model/i18n";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="section cta">
      <div className="wrap cta-inner">
        <Reveal as="div">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.text}</p>
        </Reveal>
        <Reveal as="div" className="cta-actions">
          <a href={`tel:${businessInfo.phoneHref}`} className="btn btn-primary">
            <Icon name="i-phone" />
            {t.cta.call} {businessInfo.phoneDisplay}
          </a>
          <a href={`sms:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-sms" />
            {t.cta.text_}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.cta.estimate}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
