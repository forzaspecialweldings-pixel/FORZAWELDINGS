"use client";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { whyChooseUs } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function WhyChooseUs() {
  const { t } = useLanguage();
  const items = useLocalizedList(whyChooseUs, esOverrides.whyChooseUs);

  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">03</span> / 12<span className="rule" />
          {t.whyChooseUs.sheetLabel}
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">{t.whyChooseUs.title}</h2>
        </Reveal>
        <div className="why-grid">
          {items.map((item) => (
            <Reveal as="div" className="why-card" key={item.title}>
              <div className="icon-wrap">
                <Icon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
