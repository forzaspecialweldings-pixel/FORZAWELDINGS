import { Icon } from "@/view/Icon";
import { SparkCanvas } from "@/view/SparkCanvas";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <SparkCanvas />
      <img className="hero-mark" src="/brand/elephant-hero.webp" alt="" aria-hidden="true" />

      <div className="wrap">
        <p className="hero-eyebrow">
          <span className="dot" />
          Mansfield, TX &mdash; Dallas&ndash;Fort Worth Area
        </p>
        <h1>
          Built with Precision. <em>Made to Last.</em>
        </h1>
        <p className="hero-desc">
          Custom metal fabrication, professional welding, and reliable repairs for residential, commercial, and
          industrial projects across the Dallas&ndash;Fort Worth area.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Request a Free Estimate
          </a>
          <a href="#projects" className="btn btn-ghost">
            View Our Work
          </a>
        </div>
        <div className="hero-indicators">
          <div className="hero-indicator">
            <Icon name="i-shield" />
            Fully Insured
          </div>
          <div className="hero-indicator">
            <Icon name="i-tag" />
            Free Estimates
          </div>
          <div className="hero-indicator">
            <Icon name="i-spark" />
            Custom Fabrication
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
