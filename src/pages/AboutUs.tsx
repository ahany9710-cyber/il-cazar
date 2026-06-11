import { Link } from 'react-router-dom';
import { config } from '../config';
import LegalLinks from '../components/LegalLinks';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-3xl">
        <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10 text-right">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">من نحن</h1>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              <strong className="text-gray-900">Grandeur</strong> هي شركة تسويق عقاري (Real Estate
              Marketing Broker). <strong>لسنا المطور</strong> — نحن وسيط تسويق نملك حق الترويج
              والتسويق لمشروع <strong>Park Sight</strong> من تطوير{' '}
              <strong>IL Cazar Developments</strong> في R4 — New Capital.
            </p>

            <p>
              دورنا هو تقديم معلومات المشروع، الأسعار، خطط السداد، والبروشور للمهتمين،
              وربطهم بفريق المبيعات المعتمد للمتابعة وإتمام الحجز.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">ما نقدمه</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>معلومات عن وحدات Park Sight (شقق 2 و3 غرف — تاون هاوس)</li>
              <li>خطط الدفع والأسعار التقريبية</li>
              <li>تنسيق زيارات ومعاينات للموقع</li>
              <li>متابعة عبر الهاتف وواتساب</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">تواصل معنا</h2>
            <p>
              هاتف:{' '}
              <a href={`tel:${config.phoneNumber}`} className="text-tatweer-orange hover:underline" dir="ltr">
                {config.phoneDisplay || config.phoneNumber}
              </a>
            </p>
            <p>
              واتساب:{' '}
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tatweer-orange hover:underline"
              >
                اضغط للتواصل
              </a>
            </p>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
              <strong>تنويه:</strong> Grandeur ليست IL Cazar Developments. المطور الرسمي للمشروع
              هو IL Cazar Developments. جميع العلامات التجارية والصور والمعلومات المعروضة
              ملك للمطور وتُستخدم بموجب حق التسويق.
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link to="/" className="text-sm text-tatweer-orange hover:underline">
              ← العودة للصفحة الرئيسية
            </Link>
          </div>
        </article>
      </main>
      <footer className="py-4 border-t border-gray-200 bg-white">
        <LegalLinks />
      </footer>
    </div>
  );
};

export default AboutUs;
