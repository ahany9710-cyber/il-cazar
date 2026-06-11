import { Link } from 'react-router-dom';

/**
 * Crawlable legal links — visually minimal for visitors, present in HTML for search/Google Ads review.
 */
const LegalLinks = () => (
  <nav
    aria-label="Legal"
    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] leading-tight text-gray-600/50"
  >
    <Link to="/privacy-policy" className="hover:text-gray-500 transition-colors">
      سياسة الخصوصية
    </Link>
    <span aria-hidden className="text-gray-700/40">·</span>
    <Link to="/about-us" className="hover:text-gray-500 transition-colors">
      من نحن
    </Link>
  </nav>
);

export default LegalLinks;
