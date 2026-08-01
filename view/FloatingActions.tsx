import { Icon } from "@/view/Icon";
import { businessInfo } from "@/model/data";

export function FloatingActions() {
  return (
    <div className="float-actions">
      <a
        href={`sms:${businessInfo.phoneHref}`}
        className="float-btn"
        aria-label="Send a text message to Forza Special Welding"
      >
        <Icon name="i-sms" />
      </a>
      <a href={`tel:${businessInfo.phoneHref}`} className="float-btn call" aria-label="Call Forza Special Welding">
        <Icon name="i-phone" />
      </a>
    </div>
  );
}
