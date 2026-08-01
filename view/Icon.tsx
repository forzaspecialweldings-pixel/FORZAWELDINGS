import type { IconName } from "@/model/data";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg className={className ? `icon ${className}` : "icon"} aria-hidden="true">
      <use href={`#${name}`} />
    </svg>
  );
}
