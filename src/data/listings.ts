export interface Listing {
  id: string;
  slug: string;
  name: string;
  anchorLabel: string;
  area: string;
  tagline: string;
  downpayment: string;
  installment: string;
  delivery: string;
  finishing: string;
  priceRange: string;
  image?: string;
}

export const listings: Listing[] = [
  {
    id: '1',
    slug: '2-gharf',
    name: 'شقة 2 غرف',
    anchorLabel: 'غرفتين',
    area: '102 – 124 م²',
    image: './images/listings/listing-1.jpg?v=4',
    tagline: 'Park Sight | R4 — New Capital | إطلالة على الحديقة',
    downpayment: '4 × 2.5% مقدم (يونيو – أكتوبر)',
    installment: 'أول قسط يناير — 10 سنوات',
    delivery: 'المرحلة الأولى',
    finishing: 'تشطيب كامل',
    priceRange: '4,900,000 جنيه',
  },
  {
    id: '2',
    slug: '3-gharf',
    name: 'شقة 3 غرف',
    anchorLabel: '3 غرف',
    area: '137 – 146 م²',
    image: './images/listings/listing-2.jpg?v=4',
    tagline: 'Park Sight | R4 — New Capital | إطلالة على الحديقة',
    downpayment: '4 × 2.5% مقدم (يونيو – أكتوبر)',
    installment: 'أول قسط يناير — 10 سنوات',
    delivery: 'المرحلة الأولى',
    finishing: 'تشطيب كامل',
    priceRange: '5,600,000 جنيه',
  },
  {
    id: '3',
    slug: '4-gharf',
    name: 'تاون هاوس',
    anchorLabel: '4 غرف',
    area: '170 م² (أرضي + أول)',
    image: './images/listings/listing-3.jpg?v=4',
    tagline: 'Park Sight | R4 — New Capital | إطلالة على الحديقة',
    downpayment: '4 × 2.5% مقدم (يونيو – أكتوبر)',
    installment: 'أول قسط يناير — 10 سنوات',
    delivery: 'المرحلة الأولى',
    finishing: 'تشطيب كامل',
    priceRange: '14,500,000 جنيه',
  },
];
