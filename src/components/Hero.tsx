const Hero = () => {
  const scrollToUnits = () => {
    document.getElementById('units')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="project-highlights" className="w-full">
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" aria-hidden />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="hero-fade-in text-center max-w-3xl w-full bg-black/75 rounded-2xl md:rounded-3xl px-6 py-8 md:px-10 md:py-10 border border-white/15 shadow-2xl">
            <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white mb-3 drop-shadow-md">
              by IL Cazar Developments
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Park Sight
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2 font-semibold drop-shadow-md">
              R4 — New Capital
            </p>
            <p className="text-base md:text-lg text-green-200 mb-3 font-medium drop-shadow-md">
              A New Line of Living
            </p>
            <p className="text-sm md:text-base text-white leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-md">
              مشروع سكني متكامل في موقع مميز بالعاصمة الإدارية — عمود أخضر مستمر، وحدات بإطلالة على الحديقة، ومرحلة أولى 20 فدان.
            </p>
            <button
              type="button"
              onClick={scrollToUnits}
              className="px-8 py-4 bg-tatweer-orange text-white rounded-2xl hover:bg-green-700 transition-colors duration-200 font-semibold shadow-xl text-lg"
            >
              استكشف الوحدات
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hero-bounce" aria-hidden>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
