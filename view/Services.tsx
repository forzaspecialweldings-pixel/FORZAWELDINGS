import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { services } from "@/model/data";

export function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">02</span> / 12<span className="rule" />
          Services
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Our Welding &amp; Fabrication Services</h2>
          <p className="section-text">
            From one-of-a-kind custom pieces to structural repairs, we provide dependable metalworking solutions
            tailored to each project.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service) => (
            <Reveal as="article" className="service-card" key={service.title}>
              <div className="icon-wrap">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
