import './globals.css';

export const metadata = {
  title: 'Ventrix Agency',
  description: 'Ventrix helps home service businesses get more customers with AI agents, lead generation, and conversion systems.',
  metadataBase: new URL('https://ventrixagency.com'),
  openGraph: {
    title: 'Ventrix Agency',
    description: 'Lead generation and AI systems for roofing, HVAC, plumbing, and other home service businesses.',
    url: 'https://ventrixagency.com',
    siteName: 'Ventrix Agency',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
