import { Icon } from "@/view/Icon";
import { businessInfo, navLinks } from "@/model/data";

export function Footer() {
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
            <p>Custom metal fabrication, welding, and repairs built with precision and made to last.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Custom Fabrication</a></li>
              <li><a href="#services">MIG &amp; TIG Welding</a></li>
              <li><a href="#services">Structural Repair</a></li>
              <li><a href="#services">Trailer Repairs</a></li>
            </ul>
          </div>
          <div className="footer-col links-hide">
            <h4>Navigate</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
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
          <span>&copy; {year} Forza Special Welding LLC. All rights reserved.</span>
          <a className="social" href={businessInfo.instagramUrl} target="_blank" rel="noopener">
            <Icon name="i-insta" className="icon-16" />
            {businessInfo.instagramUsername}
          </a>
        </div>
      </div>
    </footer>
  );
}
