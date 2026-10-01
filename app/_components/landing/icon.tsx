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

/** A standalone Figma SVG whose root width/height are used as-is. */
export function Asset({
  src,
  width,
  height = width,
  className = "",
}: {
  src: string;
  width: number;
  height?: number;
  className?: string;
}) {
  return (
    <img
      alt=""
      aria-hidden="true"
      src={src}
      width={width}
      height={height}
      className={`block shrink-0 max-w-none ${className}`}
    />
  );
}
