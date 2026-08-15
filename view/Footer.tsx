"use client";

import { Icon } from "@/view/Icon";
import { businessInfo, navLinks } from "@/model/data";
import { esOverrides, useLanguage, useLocalizedList } from "@/model/i18n";

export function Footer() {
  const { t } = useLanguage();
  const links = useLocalizedList(navLinks, esOverrides.navLinks);
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <img className="brand-mark footer-brand-mark" src="/brand/elephant-icon.webp" alt="" />
              <span className="brand-word">
                <span className="b1">FORZA</span>
                <span className="b2">Special Welding</span>
              </span>
            </a>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.servicesTitle}</h4>
            <ul>
              <li><a href="#services">{t.footer.serviceFab}</a></li>
              <li><a href="#services">{t.footer.serviceWeld}</a></li>
              <li><a href="#services">{t.footer.serviceStructural}</a></li>
              <li><a href="#services">{t.footer.serviceTrailer}</a></li>
            </ul>
          </div>
          <div className="footer-col links-hide">
            <h4>{t.footer.navigateTitle}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.contactTitle}</h4>
            <ul>
              <li>
                <a href={`tel:${businessInfo.phoneHref}`}>{businessInfo.phoneDisplay}</a>
              </li>
              <li>
                <span>{businessInfo.address}</span>
              </li>
              <li>
                <a href={businessInfo.instagramUrl} target="_blank" rel="noopener">
                  {businessInfo.instagramUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t.footer.rights(year)}</span>
          <a className="social" href={businessInfo.instagramUrl} target="_blank" rel="noopener">
            <Icon name="i-insta" className="icon-16" />
            {businessInfo.instagramUsername}
          </a>
        </div>
      </div>
    </footer>
  );
}
