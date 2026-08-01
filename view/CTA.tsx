import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { businessInfo } from "@/model/data";

export function CTA() {
  return (
    <section className="section cta">
      <div className="wrap cta-inner">
        <Reveal as="div">
          <h2>Have a Metal Project in Mind?</h2>
          <p>
            Tell us what you need. Whether it is a custom fabrication, structural repair, trailer modification, or a
            special metal project, contact us to discuss the details.
          </p>
        </Reveal>
        <Reveal as="div" className="cta-actions">
          <a href={`tel:${businessInfo.phoneHref}`} className="btn btn-primary">
            <Icon name="i-phone" />
            Call {businessInfo.phoneDisplay}
          </a>
          <a href={`sms:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-sms" />
            Send a Text Message
          </a>
          <a href="#contact" className="btn btn-ghost">
            Request a Free Estimate
          </a>
        </Reveal>
      </div>
    </section>
  );
}
