"use client";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { aboutAttributes } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function About() {
  const { t } = useLanguage();
  const attributes = useLocalizedList(aboutAttributes, esOverrides.aboutAttributes);

  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">01</span> / 12<span className="rule" />
          {t.about.sheetLabel}
        </div>
        <div className="about-grid">
          <Reveal className="about-copy">
            <h2 className="section-title">{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </Reveal>
          <Reveal className="attr-list">
            {attributes.map((attr) => (
              <div className="attr-item" key={attr.label}>
                <Icon name={attr.icon} />
                <span>{attr.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
