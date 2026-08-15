"use client";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { clientTypes } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function WhoWeServe() {
  const { t } = useLanguage();
  const clients = useLocalizedList(clientTypes, esOverrides.clientTypes);

  return (
    <section className="section section--alt" id="who-we-serve">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">06</span> / 12<span className="rule" />
          {t.whoWeServe.sheetLabel}
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">{t.whoWeServe.title}</h2>
        </Reveal>
        <div className="serve-grid">
          {clients.map((client) => (
            <Reveal as="div" className="serve-card" key={client.label}>
              <Icon name={client.icon} />
              <span>{client.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
