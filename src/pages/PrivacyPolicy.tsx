import { Link } from 'react-router-dom';
import { config } from '../config';
import LegalLinks from '../components/LegalLinks';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 max-w-3xl">
        <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10 prose prose-gray max-w-none text-right">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">سياسة الخصوصية</h1>
          <p className="text-sm text-gray-500 mb-8">آخر تحديث: {new Date().getFullYear()}</p>

          <section className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            <p>
              تُدار هذه الصفحة بواسطة <strong>Grandeur</strong> — شركة تسويق عقاري (وسيط تسويق)
              وليست المطور مباشرة. نملك حق التسويق والترويج لمشروع Park Sight by IL Cazar
              Developments في R4 — New Capital.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">البيانات التي نجمعها</h2>
            <p>
              عند تعبئة نموذج الاستفسار، قد نجمع: الاسم الكامل، رقم التواصل، وأي بيانات
              اختيارية تقدّمها. تُستخدم هذه البيانات للرد على استفسارك وتزويدك بمعلومات
              المشروع والأسعار وخطط السداد.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">كيف نستخدم بياناتك</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>التواصل معك عبر الهاتف أو واتساب بناءً على طلبك</li>
              <li>إرسال تفاصيل المشروع والبروشور</li>
              <li>تحسين جودة خدمة التسويق والمتابعة</li>
            </ul>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">مشاركة البيانات</h2>
            <p>
              قد تُشارك بياناتك مع IL Cazar Developments (المطور) لغرض متابعة طلبك فقط.
              نستخدم Formspree لاستقبال النماذج. عند تفعيل إعلانات Google، قد تُستخدم
              أدوات تحليل Google وفق سياسات Google.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">حفظ البيانات</h2>
            <p>
              نحتفظ ببياناتك للمدة اللازمة لإتمام التواصل والمتابعة، أو حتى تطلب حذفها.
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">حقوقك</h2>
            <p>
              يمكنك طلب الوصول إلى بياناتك أو تصحيحها أو حذفها بالتواصل معنا على{' '}
              <a href={`tel:${config.phoneNumber}`} className="text-tatweer-orange hover:underline" dir="ltr">
                {config.phoneDisplay || config.phoneNumber}
              </a>
              .
            </p>

            <h2 className="text-lg font-semibold text-gray-900 pt-4">إخلاء مسؤولية</h2>
            <p>
              Grandeur وسيط تسويق وليست المطور. جميع الأسعار والمساحات ومواعيد التسليم
              تقريبية وقابلة للتغيير دون إشعار. يرجى التأكد من آخر التحديثات مع فريق المبيعات.
            </p>
          </section>

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

export default PrivacyPolicy;
