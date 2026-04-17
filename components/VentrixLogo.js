export default function VentrixLogo({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ventrix logo">
      <rect x="2" y="2" width="68" height="68" rx="20" stroke="currentColor" strokeWidth="3.5" opacity="0.16" />
      <path d="M17 18L36 55L55 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 18H48" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M40 25L47 32L43 36L49 42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <circle cx="50.5" cy="24.5" r="2.5" fill="currentColor" opacity="0.9" />
      <circle cx="54" cy="42" r="2.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
