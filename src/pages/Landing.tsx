import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HeroInfoCard from '../components/HeroInfoCard';
import ListingsCarousel from '../components/ListingsCarousel';
import CommunitiesCarousel from '../components/CommunitiesCarousel';
import LeadForm from '../components/LeadForm';
import FAQ from '../components/FAQ';
import { config } from '../config';

const scrollToForm = () => {
  const formSection = document.getElementById('lead-form');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const PROXIMITY = [
  { name: 'مسجد الفتاح العليم', time: '5 دقائق' },
  { name: 'الجامعة الألمانية الدولية (GIU)', time: '6 دقائق' },
  { name: 'VEA / Glen / The Crest', time: '10 دقائق' },
  { name: 'Golden Square / نادي الأهلي', time: '12 دقيقة' },
  { name: 'الجامعة الأمريكية (AUC)', time: '20 دقيقة' },
  { name: 'Creek Town', time: '26 دقيقة' },
];

const ROADS = [
  { name: 'محور محمد بن زايد', time: '7 دقائق' },
  { name: 'الطريق الدائري الأوسط', time: '9 دقائق' },
  { name: 'طريق السويس', time: '20 دقيقة' },
  { name: 'الطريق الدائري', time: '25 دقيقة' },
];

const Landing = () => {
  const mapImageSrc = config.mapImageUrl?.trim() || './location-map.jpg?v=3';

  return (
    <main>
      <Hero />
      <HeroInfoCard />
      <ListingsCarousel />
      <section id="architecture-design" className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Architecture & Design
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Park Sight by IL Cazar Developments — مشروع متعدد الاستخدامات في R4 بالعاصمة الإدارية،
            مخطط رئيسياً بواسطة Mimar. يمتد على masterplan واسع يجمع بين المساحات السكنية والمرافق
            والمناظر الطبيعية في بيئة متصلة واحدة.
          </p>
          <p className="text-gray-600 text-lg mb-8">
            مبني حول عمود أخضر مستمر (Green Spine) يربط بين الطبيعة والحركة والحياة اليومية.
            Footprint 13% — المرحلة الأولى 20 فدان — كل الوحدات بإطلالة على الحديقة.
          </p>
          <div className="max-w-md mx-auto mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./arch.jpg?v=2"
              alt="Park Sight — The Master Plan by Mimar"
              className="w-full h-auto"
            />
          </div>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 bg-tatweer-orange text-white rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold shadow-lg"
          >
            Make an Inquiry
          </button>
        </div>
      </section>
      <CommunitiesCarousel />
      <section id="location-map" className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-tatweer-navy">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Location Map
          </h2>
          <p className="text-gray-300 text-center mb-8">
            Park Sight | R4 — New Capital | العاصمة الإدارية
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white shadow-2xl mb-10 ring-2 ring-white/10"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="origin-center"
            >
              <img
                src={mapImageSrc}
                alt="Park Sight location map — R4 New Capital"
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">الطرق والمحاور</h3>
              <ul className="space-y-2">
                {ROADS.map((item) => (
                  <li key={item.name} className="flex justify-between text-gray-300 text-sm">
                    <span>{item.name}</span>
                    <span className="text-tatweer-orange font-medium">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">المعالم القريبة</h3>
              <ul className="space-y-2">
                {PROXIMITY.map((item) => (
                  <li key={item.name} className="flex justify-between text-gray-300 text-sm">
                    <span>{item.name}</span>
                    <span className="text-tatweer-orange font-medium">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <LeadForm />
      <FAQ />
    </main>
  );
};

export default Landing;
