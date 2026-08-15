"use client";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { services } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function Services() {
  const { t } = useLanguage();
  const items = useLocalizedList(services, esOverrides.services);

  return (
    <section className="section section--alt" id="services">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">02</span> / 12<span className="rule" />
          {t.services.sheetLabel}
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-text">{t.services.text}</p>
        </Reveal>

        <div className="services-grid">
          {items.map((service) => (
            <Reveal as="article" className="service-card" key={service.title}>
              <div className="icon-wrap">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
