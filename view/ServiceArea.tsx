"use client";

import { Reveal } from "@/view/Reveal";
import { serviceAreaBase, serviceAreaCities } from "@/model/data";
import { useLanguage } from "@/model/i18n";

export function ServiceArea() {
  const { t } = useLanguage();

  return (
    <section className="section" id="service-area">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">07</span> / 12<span className="rule" />
          {t.serviceArea.sheetLabel}
        </div>
        <div className="area-layout">
          <Reveal as="div" className="area-copy">
            <h2 className="section-title">{t.serviceArea.title}</h2>
            <p className="section-text">{t.serviceArea.text}</p>
            <div className="area-note">
              <strong>{t.serviceArea.noteLabel}</strong> {t.serviceArea.noteText}
            </div>
          </Reveal>
          <Reveal as="div" className="map-frame">
            <svg viewBox="0 0 400 320" aria-label={t.serviceArea.svgAria}>
              <defs>
                <pattern id="dotgrid" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,.05)" />
                </pattern>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity=".16" />
                  <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0" />
                </radialGradient>
                {serviceAreaCities.map((city) => (
                  <linearGradient
                    key={city.name}
                    id={`spoke-${city.name.replace(/\s+/g, "")}`}
                    gradientUnits="userSpaceOnUse"
                    x1={serviceAreaBase.x}
                    y1={serviceAreaBase.y}
                    x2={city.x}
                    y2={city.y}
                  >
                    <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity=".8" />
                    <stop offset="100%" stopColor="var(--metal-silver)" stopOpacity=".35" />
                  </linearGradient>
                ))}
              </defs>
              <rect width="400" height="320" fill="url(#dotgrid)" />
              <g stroke="var(--border-default)" strokeWidth="1" fill="none">
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="55" opacity=".5" />
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="100" opacity=".35" />
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="145" opacity=".2" />
              </g>
              <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="150" fill="url(#hubGlow)" />
              <g strokeWidth="1.25">
                {serviceAreaCities.map((city) => (
                  <line
                    key={city.name}
                    x1={serviceAreaBase.x}
                    y1={serviceAreaBase.y}
                    x2={city.x}
                    y2={city.y}
                    stroke={`url(#spoke-${city.name.replace(/\s+/g, "")})`}
                  />
                ))}
              </g>
              <g fontFamily="Oswald, sans-serif" fontSize="10.5" fill="var(--text-secondary)" textAnchor="middle">
                {serviceAreaCities.map((city) => (
                  <g key={city.name}>
                    <circle cx={city.x} cy={city.y} r="5.5" fill="none" stroke="var(--metal-silver)" strokeWidth="1" opacity=".55" />
                    <circle cx={city.x} cy={city.y} r="3" fill="var(--metal-silver)" />
                    <text x={city.labelX} y={city.labelY} textAnchor={city.anchor}>
                      {city.name}
                    </text>
                  </g>
                ))}
              </g>
              <g>
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="12" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" opacity=".5" />
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="9" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" />
                <circle cx={serviceAreaBase.x} cy={serviceAreaBase.y} r="3.5" fill="var(--accent-secondary)" />
                <text
                  x={serviceAreaBase.x}
                  y={serviceAreaBase.y + 27}
                  textAnchor="middle"
                  fontFamily="Oswald, sans-serif"
                  fontWeight="600"
                  fontSize="12"
                  fill="var(--text-primary)"
                >
                  {t.serviceArea.base}
                </text>
                <text
                  x={serviceAreaBase.x}
                  y={serviceAreaBase.y + 40}
                  textAnchor="middle"
                  fontFamily="Oswald, sans-serif"
                  fontSize="8.5"
                  letterSpacing="1"
                  fill="var(--accent-secondary)"
                >
                  {t.serviceArea.baseSub}
                </text>
              </g>
            </svg>
            <span className="map-disclaimer">{t.serviceArea.disclaimer}</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
