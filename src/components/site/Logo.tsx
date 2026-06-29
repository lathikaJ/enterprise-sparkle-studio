import { useId } from "react";

interface LogoProps {
  className?: string;
}

export function LiloLogo({ className = "" }: LogoProps) {
  const maskId = useId();

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Icon */}
      <svg
        className="h-7 w-7 text-foreground shrink-0 select-none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id={maskId}>
            {/* White area retains the drawing */}
            <rect width="100" height="100" fill="white" />
            {/* Black circles mask out parts of the main circle where they overlap */}
            <circle cx="34" cy="34" r="14" fill="black" />
            <circle cx="66" cy="66" r="10" fill="black" />
          </mask>
        </defs>

        {/* Main large ring (masked to prevent overlaps) */}
        <circle
          cx="50"
          cy="50"
          r="23"
          stroke="currentColor"
          strokeWidth="5"
          mask={`url(#${maskId})`}
        />

        {/* Top-left small ring */}
        <circle
          cx="34"
          cy="34"
          r="14"
          stroke="currentColor"
          strokeWidth="5"
        />

        {/* Bottom-right small ring */}
        <circle
          cx="66"
          cy="66"
          r="10"
          stroke="currentColor"
          strokeWidth="5"
        />

        {/* Light blue dot in bottom-right ring */}
        <circle
          cx="66"
          cy="66"
          r="4.5"
          className="fill-primary"
        />
      </svg>

      {/* Logo Text */}
      <div className="flex items-baseline gap-1.5 font-display select-none">
        <span className="text-xl font-bold tracking-tight text-foreground uppercase leading-none">
          Lilo
        </span>
        <span className="text-[10px] font-medium tracking-[0.25em] text-primary uppercase leading-none">
          Technologies
        </span>
      </div>
    </div>
  );
}
