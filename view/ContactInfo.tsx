"use client";

import { Icon } from "@/view/Icon";
import { businessInfo } from "@/model/data";
import { useLanguage } from "@/model/i18n";

export function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="contact-info">
      <dl>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-phone" />
          </div>
          <div>
            <dt>{t.contactInfo.contact}</dt>
            <dd>{businessInfo.contactName}</dd>
          </div>
        </div>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-phone" />
          </div>
          <div>
            <dt>{t.contactInfo.phone}</dt>
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
            <dt>{t.contactInfo.address}</dt>
            <dd>{businessInfo.address}</dd>
          </div>
        </div>
        <div className="row">
          <div className="icon-wrap">
            <Icon name="i-insta" />
          </div>
          <div>
            <dt>{t.contactInfo.instagram}</dt>
            <dd>
              <a href={businessInfo.instagramUrl} target="_blank" rel="noopener">
                {businessInfo.instagramUsername}
              </a>
            </dd>
          </div>
        </div>
      </dl>
      <div className="quick-alt">
        <p>{t.contactInfo.altPrompt}</p>
        <div className="row-btns">
          <a href={`tel:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-phone" />
            {t.contactInfo.callNow}
          </a>
          <a href={`sms:${businessInfo.phoneHref}`} className="btn btn-ghost">
            <Icon name="i-sms" />
            {t.contactInfo.textNow}
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
