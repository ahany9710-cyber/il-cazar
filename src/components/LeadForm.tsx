import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../config';

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${config.formspreeFormId}`;

interface FormData {
  fullName: string;
  phoneNumber: string;
  confirmPhoneNumber: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  confirmPhoneNumber?: string;
}

const LeadForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    confirmPhoneNumber: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) return 'رقم التواصل مطلوب';
    return undefined;
  };

  const validateField = (name: keyof FormData, value: string, data = formData): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'الاسم مطلوب';
        return undefined;
      case 'phoneNumber':
        return validatePhone(value);
      case 'confirmPhoneNumber':
        if (!value.trim()) return undefined;
        if (value.trim() !== data.phoneNumber.trim()) {
          return 'الرقم غير متطابق';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    const next = { ...formData, [name]: value };
    setFormData(next);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value, next) }));
    }
    if (name === 'phoneNumber' && formData.confirmPhoneNumber) {
      setErrors((prev) => ({
        ...prev,
        confirmPhoneNumber: validateField('confirmPhoneNumber', formData.confirmPhoneNumber, next),
      }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    const error = validateField(name, formData[name]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getThankYouPath = (): string => {
    const base = (typeof import.meta.env.BASE_URL === 'string' ? import.meta.env.BASE_URL : '').replace(/\.$/, '') || '/';
    return base === '/' ? '/thank-you' : `${base.replace(/\/$/, '')}/thank-you`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const errorMessage = 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا على الواتساب أو الهاتف.';
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('full_name', formData.fullName);
      formDataToSend.append('phone', formData.phoneNumber);
      formDataToSend.append('confirm_phone', formData.confirmPhoneNumber);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
        redirect: 'manual',
      });
      const success =
        res.ok ||
        res.status === 301 ||
        res.status === 302 ||
        res.status === 303 ||
        res.type === 'opaqueredirect';
      if (success) {
        navigate(getThankYouPath());
        return;
      }
      setIsSubmitting(false);
      alert(errorMessage);
    } catch {
      setIsSubmitting(false);
      alert(errorMessage);
    }
  };

  return (
    <section id="lead-form" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
            احصل على الأسعار وخطط الدفع والبروشور
          </h2>
          <p className="text-gray-600 text-center mb-8">
            املأ النموذج أدناه وسنرسل لك جميع التفاصيل
          </p>

          <motion.form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="full_name"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                  errors.fullName
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-tatweer-orange'
                } focus:outline-none focus:ring-2 focus:ring-tatweer-orange focus:ring-offset-2`}
                placeholder="أدخل اسمك الكامل"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                رقم التواصل <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                id="phoneNumber"
                name="phone"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                onBlur={() => handleBlur('phoneNumber')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                  errors.phoneNumber
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-tatweer-orange'
                } focus:outline-none focus:ring-2 focus:ring-tatweer-orange focus:ring-offset-2`}
                placeholder="01xxxxxxxxx"
              />
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            <div>
              <label htmlFor="confirmPhoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                أكد رقم التواصل <span className="text-gray-400 font-normal">(اختياري)</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                id="confirmPhoneNumber"
                name="confirm_phone"
                value={formData.confirmPhoneNumber}
                onChange={(e) => handleChange('confirmPhoneNumber', e.target.value)}
                onBlur={() => handleBlur('confirmPhoneNumber')}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-colors ${
                  errors.confirmPhoneNumber
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-tatweer-orange'
                } focus:outline-none focus:ring-2 focus:ring-tatweer-orange focus:ring-offset-2`}
                placeholder="أكد رقم التواصل"
              />
              {errors.confirmPhoneNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPhoneNumber}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              animate={
                isSubmitting
                  ? undefined
                  : {
                      scale: [1, 1.06, 1, 1.04, 1],
                      y: [0, -4, 0, -2, 0],
                    }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={isSubmitting ? undefined : { scale: 1.08, backgroundColor: '#15803d' }}
              whileTap={isSubmitting ? undefined : { scale: 0.95 }}
              className="w-full px-6 py-4 rounded-xl font-semibold text-white bg-tatweer-orange hover:bg-green-700 transition-colors shadow-lg shadow-green-900/25 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال والحصول على البروشور'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
