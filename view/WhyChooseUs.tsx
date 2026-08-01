import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { whyChooseUs } from "@/model/data";

export function WhyChooseUs() {
  return (
    <section className="section" id="why">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">03</span> / 12<span className="rule" />
          Why Choose Us
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Why Choose Forza Special Welding?</h2>
        </Reveal>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
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
