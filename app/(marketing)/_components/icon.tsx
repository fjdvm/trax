import { ICONS, type IconName } from "./icons";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const { src, size, inset, bleed } = ICONS[name];
  return (
    <span
      aria-hidden="true"
      className={`relative block shrink-0 overflow-clip ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute" style={{ inset }}>
        <span className="absolute" style={{ inset: bleed }}>
          <img alt="" src={src} className="block size-full max-w-none" />
        </span>
      </span>
    </span>
  );
}
