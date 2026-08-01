import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { aboutAttributes } from "@/model/data";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">01</span> / 12<span className="rule" />
          About Forza
        </div>
        <div className="about-grid">
          <Reveal className="about-copy">
            <h2 className="section-title">Metalwork Built Around Your Project</h2>
            <p>
              Forza Special Welding LLC specializes in custom metal fabrication, welding, and structural metal repair
              for residential, commercial, and industrial clients.
            </p>
            <p>
              Every project is developed according to the customer&rsquo;s needs, combining durability, precision,
              functionality, and a high-quality finish.
            </p>
          </Reveal>
          <Reveal className="attr-list">
            {aboutAttributes.map((attr) => (
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
