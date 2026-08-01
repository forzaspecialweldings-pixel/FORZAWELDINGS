import { Icon } from "@/view/Icon";
import { businessInfo } from "@/model/data";

export function ContactInfo() {
  return (
    <div className="contact-info">
      <dl>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-phone" />
          </div>
          <div>
            <dt>Contact</dt>
            <dd>{businessInfo.contactName}</dd>
          </div>
        </div>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-phone" />
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${businessInfo.phoneHref}`}>{businessInfo.phoneDisplay}</a>
            </dd>
          </div>
        </div>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-pin" />
          </div>
          <div>
            <dt>Address</dt>
            <dd>{businessInfo.address}</dd>
          </div>
        </div>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-insta" />
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={businessInfo.instagramUrl} target="_blank" rel="noopener">
                {businessInfo.instagramUsername}
              </a>
            </dd>
          </div>
        </div>
      </dl>
      <div className="quick-alt">
        <p>Prefer not to fill out a form? Reach us directly:</p>
        <div className="row-btns">
          <a href={`tel:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-phone" />
            Call Now
          </a>
          <a href={`sms:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-sms" />
            Text Now
          </a>
          <a href={businessInfo.instagramUrl} target="_blank" rel="noopener" className="btn btn-ghost">
            <Icon name="i-insta" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
