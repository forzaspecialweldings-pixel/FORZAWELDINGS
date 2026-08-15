"use client";

import { Icon } from "@/view/Icon";
import { useLanguage } from "@/model/i18n";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={className ? `lang-switch ${className}` : "lang-switch"} role="group" aria-label={t.header.langAria}>
      <Icon name="i-globe" className="lang-switch-icon" />
      <button
        type="button"
        className={lang === "en" ? "active" : undefined}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        English
      </button>
      <button
        type="button"
        className={lang === "es" ? "active" : undefined}
        aria-pressed={lang === "es"}
        onClick={() => setLang("es")}
      >
        Español
      </button>
    </div>
  );
}
