import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/cairo/arabic-400.css'
import '@fontsource/cairo/arabic-600.css'
import '@fontsource/cairo/arabic-700.css'
import './index.css'
import App from './App.tsx'

const defer = (fn: () => void) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(fn);
  } else {
    setTimeout(fn, 1);
  }
};

defer(async () => {
  const { initGtag } = await import('./utils/gtag');
  initGtag();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
