import { ContactForm } from "@/view/ContactForm";
import { ContactInfo } from "@/view/ContactInfo";
import { Reveal } from "@/view/Reveal";

export function Contact() {
  return (
    <section className="section section--alt" id="contact">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">08</span> / 12<span className="rule" />
          Contact
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Contact Forza Special Welding</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div">
            <ContactInfo />
          </Reveal>
          <Reveal as="div">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
