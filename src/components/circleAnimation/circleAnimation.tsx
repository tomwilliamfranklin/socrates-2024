const defaultRings = [
  {
    color: "var(--accent)",
    speed: 12,
    direction: 1,
    dasharray: "8 6",
    opacity: 0.7,
  },
  {
    color: "var(--secondAccent)",
    speed: 20,
    direction: -1,
    dasharray: "14 8",
    opacity: 0.55,
  },
  {
    color: "var(--background)",
    speed: 30,
    direction: 1,
    dasharray: "20 10",
    opacity: 0.4,
  },
];

export default function RotatingCircles({ rings = defaultRings, size = 680 }) {
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size / 2 - 10;
  const radiusStep = maxRadius / (rings.length + 0.5);

  const keyframes = rings
    .map(
      (ring, i) => `
      @keyframes ring-spin-${i} {
        from { transform: rotate(0deg); }
        to   { transform: rotate(${ring.direction >= 0 ? 360 : -360}deg); }
      }
    `
    )
    .join("");

  return (
    <>
      <style>{keyframes}</style>
      <svg
        className="w-[500px]"
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {rings.map((ring, i) => {
          const r = radiusStep * (i + 1);
          const dotX = cx;
          const dotY = cy - r;
          const animStyle = {
            animation: `ring-spin-${i} ${ring.speed}s linear infinite`,
            transformOrigin: `${cx}px ${cy}px`,
          };

          return (
            <g key={i} style={animStyle}>
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={ring.color}
                strokeWidth="1.5"
                strokeDasharray={ring.dasharray}
                strokeLinecap="round"
                opacity={ring.opacity}
              />
              <circle
                cx={dotX}
                cy={dotY}
                r="4"
                fill={ring.color}
                opacity={0.9}
              />
            </g>
          );
        })}

        <circle
          cx={cx}
          cy={cy}
          r="5"
          fill={rings[0]?.color ?? "#3b82f6"}
          opacity="0.8"
        />
      </svg>
    </>
  );
}
