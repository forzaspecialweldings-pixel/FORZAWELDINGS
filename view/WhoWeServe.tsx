import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { clientTypes } from "@/model/data";

export function WhoWeServe() {
  return (
    <section className="section section--alt" id="who-we-serve">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">06</span> / 12<span className="rule" />
          Who We Serve
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Who We Serve</h2>
        </Reveal>
        <div className="serve-grid">
          {clientTypes.map((client) => (
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
