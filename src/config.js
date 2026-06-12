/**
 * إعدادات الموقع - عدّل القيم هنا فقط لتحديثها في كل الصفحات
 * Site config - edit these values only to update across the whole site
 */

export const config = {
  // معرف فورم Formspree (الفورم يبعت على الإيميل المسجل في formspree.io)
  // Formspree form ID (form submissions go to the email registered at formspree.io)
  formspreeFormId: 'mojzkjky',

  // رقم الواتساب (بدون + أو مسافات لاستخدامه في wa.me)
  // WhatsApp number (without + or spaces for wa.me links)
  whatsappNumber: '201110944499',

  // رقم الموبايل للمكالمات (مع + للمكالمات)
  // Phone number for calls (with + for tel: links)
  phoneNumber: '+201110944499',

  // تنسيق رقم الموبايل للعرض (اختياري - لو فاضي يستخدم phoneNumber)
  // Phone display format (optional - uses phoneNumber if empty)
  phoneDisplay: '+20 111 094 4499',

  // ——— Google Ads (تهيئة جوجل أدز) ———
  // معرف Google Tag العالمي — مُحمّل في index.html
  gtag_id: 'AW-18202386140',

  // معرف التحويل (للتوثيق — نفس معرف الـ Tag)
  conversion_id: 'AW-18202386140',

  // رمز التحويل من Google Ads — يُستخدم في صفحة الشكر (أضفه لما يتوفر)
  conversion_label: '',

  // ——— Hero image (optional - external URL) ———
  // لو فاضي: يستخدم ./hero.jpg من public
  heroImageUrl: '',
  mapImageUrl: '',

  // ——— Grandeur (وسيط التسويق) ———
  companyName: 'Grandeur',
  developerName: 'IL Cazar Developments',
  projectName: 'Park Sight',
};
