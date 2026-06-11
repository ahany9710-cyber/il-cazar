import { useEffect, useState } from 'react';
import { config } from '../config';

const HOURS_SCENARIOS = [10, 14, 18, 24, 36, 48];

const pad = (n: number) => String(n).padStart(2, '0');

const CountdownBar = () => {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const hours = HOURS_SCENARIOS[Math.floor(Math.random() * HOURS_SCENARIOS.length)];
    const minutes = Math.floor(Math.random() * 60);
    const deadline = Date.now() + hours * 3600_000 + minutes * 60_000;
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(remaining / 1000);
  const hh = Math.floor(totalSeconds / 3600);
  const mm = Math.floor((totalSeconds % 3600) / 60);
  const ss = totalSeconds % 60;
  const ended = remaining <= 0;

  return (
    <div className="w-full bg-tatweer-navy text-white border-b border-white/10">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <svg className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-gray-200">
              {ended ? 'انتهى العرض' : 'ينتهي العرض عند غلق شيكات جدية الحجز'}
            </span>
            <span
              dir="ltr"
              className="animate-fade-pulse font-mono font-bold text-sm sm:text-base text-amber-400 tabular-nums tracking-wider drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
            >
              {pad(hh)}:{pad(mm)}:{pad(ss)}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="animate-price-pulse flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-amber-400/40">
              <span className="text-xs sm:text-sm text-gray-200">المقدم يبدأ من</span>
              <span className="animate-price-glow text-base sm:text-lg font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                100 ألف ج
              </span>
            </div>

            <div className="animate-price-pulse flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-amber-400/40 [animation-delay:0.4s]">
              <span className="text-xs sm:text-sm text-gray-200">القسط الشهري من</span>
              <span className="animate-price-glow text-base sm:text-lg font-extrabold drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] [animation-delay:0.3s]">
                37 ألف ج
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 shrink-0">
            <a
              href={`tel:${config.phoneNumber}`}
              className="btn-shine animate-btn-bounce relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-tatweer-orange text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30"
            >
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative z-10">اتصل الآن</span>
            </a>

            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine animate-btn-bounce relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-green-500/30 [animation-delay:0.5s]"
            >
              <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;
