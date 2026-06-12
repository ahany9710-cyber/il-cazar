import { config } from '../config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Google Ads conversion event on the thank-you page.
 * Requires conversion_label in config (from Google Ads conversion action).
 */
export function trackConversion(): void {
  const tagId = config.gtag_id?.trim();
  const label = config.conversion_label?.trim();
  if (!tagId || !label || typeof window.gtag !== 'function') {
    return;
  }
  window.gtag('event', 'conversion', { send_to: `${tagId}/${label}` });
}
