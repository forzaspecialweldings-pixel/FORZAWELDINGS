"use client";

import { Icon } from "@/view/Icon";
import { businessInfo } from "@/model/data";
import { useLanguage } from "@/model/i18n";

export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="float-actions">
      <a href={`sms:${businessInfo.phoneHref}`} className="float-btn" aria-label={t.floating.smsAria}>
        <Icon name="i-sms" />
      </a>
      <a href={`tel:${businessInfo.phoneHref}`} className="float-btn call" aria-label={t.floating.callAria}>
        <Icon name="i-phone" />
      </a>
    </div>
  );
}
