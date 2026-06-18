import type { SVGProps } from "react";

/** Drohne (Quadcopter) — Brand-Icon & Platzhalter-Motiv. */
export function DroneIcon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="5" cy="5" r="2.4" />
      <circle cx="19" cy="5" r="2.4" />
      <circle cx="5" cy="19" r="2.4" />
      <circle cx="19" cy="19" r="2.4" />
      <path d="M7 7l2.6 2.6M17 7l-2.6 2.6M7 17l2.6-2.6M17 17l-2.6-2.6" />
      <rect x="9" y="9" width="6" height="6" rx="1.6" />
      <path d="M10.5 15v1.4M13.5 15v1.4" />
    </svg>
  );
}

export function InstagramIcon({ size = 22, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ size = 22, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.2 9.3l4.4 2.7-4.4 2.7V9.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ size = 22, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 10v7" />
      <circle cx="7" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2.2 2.2 0 0 1 4.4 0v4M11 10.6V17" />
    </svg>
  );
}

export function XIcon({ size = 20, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.3 8.34L23.2 22h-6.7l-5.24-6.85L5.3 22H2.2l7.8-8.92L1.2 2h6.86l4.74 6.26L18.9 2zm-1.17 18h1.9L7.36 3.9H5.32L17.73 20z" />
    </svg>
  );
}

export const socialIconMap = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  x: XIcon,
} as const;
