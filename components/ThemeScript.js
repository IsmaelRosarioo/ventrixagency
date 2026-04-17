export default function ThemeScript() {
  const script = `
    (() => {
      const root = document.documentElement;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
