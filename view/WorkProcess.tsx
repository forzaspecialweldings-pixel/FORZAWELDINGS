"use client";

import { Reveal } from "@/view/Reveal";
import { workProcess } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function WorkProcess() {
  const { t } = useLanguage();
  const steps = useLocalizedList(workProcess, esOverrides.workProcess);

  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">05</span> / 12<span className="rule" />
          {t.workProcess.sheetLabel}
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">{t.workProcess.title}</h2>
        </Reveal>
        <div className="process-track">
          {steps.map((step) => (
            <Reveal as="div" className="process-step" key={step.idx}>
              <div className="idx">{step.idx}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
