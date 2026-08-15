"use client";

import { Icon } from "@/view/Icon";
import { SparkCanvas } from "@/view/SparkCanvas";
import { useLanguage } from "@/model/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <SparkCanvas />
      <img className="hero-mark" src="/brand/elephant-hero.webp" alt="" aria-hidden="true" />

      <div className="wrap">
        <p className="hero-eyebrow">
          <span className="dot" />
          {t.hero.eyebrow}
        </p>
        <h1>
          {t.hero.titleLine1} <em>{t.hero.titleEm}</em>
        </h1>
        <p className="hero-desc">{t.hero.desc}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#projects" className="btn btn-ghost">
            {t.hero.ctaGhost}
          </a>
        </div>
        <div className="hero-indicators">
          <div className="hero-indicator">
            <Icon name="i-shield" />
            {t.hero.indicatorInsured}
          </div>
          <div className="hero-indicator">
            <Icon name="i-tag" />
            {t.hero.indicatorEstimates}
          </div>
          <div className="hero-indicator">
            <Icon name="i-spark" />
            {t.hero.indicatorFab}
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>{t.hero.scroll}</span>
        <span className="line" />
      </div>
    </section>
  );
}
