"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/view/Icon";
import { businessInfo, navLinks } from "@/model/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  const sectionsRef = useRef<Element[]>([]);
  useEffect(() => {
    sectionsRef.current = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    if (!("IntersectionObserver" in window) || sectionsRef.current.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sectionsRef.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={scrolled ? "site-header scrolled" : "site-header"} id="site-header">
        <div className="wrap">
          <a href="#top" className="brand" aria-label="Forza Special Welding LLC — home">
            <BrandMark />
            <span className="brand-word">
              <span className="b1">FORZA</span>
              <span className="b2">Special Welding</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={activeHref === link.href ? "active" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Estimate
            </a>
            <button
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name="i-menu" className="icon-menu" />
              <Icon name="i-close" className="icon-close" />
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" className={menuOpen ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile">
        <div className="wrap">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-block">
            Get a Free Estimate
          </a>
          <div className="contact-block">
            <a href={`tel:${businessInfo.phoneHref}`}>{businessInfo.phoneDisplay}</a>
            <span>{businessInfo.address}</span>
            <a href={businessInfo.instagramUrl} target="_blank" rel="noopener">
              {businessInfo.instagramUsername}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function BrandMark() {
  return <img className="brand-mark" src="/brand/elephant-icon.webp" alt="" />;
}
