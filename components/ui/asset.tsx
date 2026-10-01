/** A decorative SVG exported from the design, rendered at its own root size. */
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
    // Static SVGs exported from the design: nothing for next/image to optimize.
    // eslint-disable-next-line @next/next/no-img-element
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
