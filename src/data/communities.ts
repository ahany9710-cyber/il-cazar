export interface Community {
  id: string;
  name: string;
  tags: string[];
  description: string;
  image: string;
}

export const communities: Community[] = [
  {
    id: 'the-park',
    name: 'The Park',
    tags: ['Park Sight', 'العاصمة الإدارية', 'R4'],
    description:
      'الحديقة المركزية للمجتمع — مساحة تجمع بين العافية والترفيه والطبيعة والمطاعم والفعاليات في تجربة مناظر طبيعية متكاملة. 40 فدان من التجارب الخضراء المتصلة.',
    image: './images/communities/the-park.jpg?v=4',
  },
  {
    id: 'wellness',
    name: 'Wellness',
    tags: ['العافية', 'IL Cazar', 'Mimar'],
    description:
      'منطقة العافية واللياقة ضمن المخطط الرئيسي من Mimar. مساحات مصممة للراحة والاسترخاء والعناية بالصحة في قلب المجتمع الأخضر.',
    image: './images/communities/wellness.jpg?v=4',
  },
  {
    id: 'nature',
    name: 'Nature',
    tags: ['الطبيعة', 'Green Spine', '13% Footprint'],
    description:
      'مبني حول عمود أخضر مستمر يربط بين الطبيعة والحركة والحياة اليومية. Footprint 13% — المرحلة الأولى 20 فدان من العيش المتصل بالطبيعة.',
    image: './images/communities/nature.jpg?v=4',
  },
  {
    id: 'community',
    name: 'Community & Connection',
    tags: ['المجتمع', 'Mixed-Use', 'Phase 1'],
    description:
      'مجتمع متعدد الاستخدامات يجمع بين المساحات السكنية والمرافق والمناظر الطبيعية ووجهات أسلوب الحياة في بيئة متصلة واحدة — وجهة عصرية توازن بين الوصول والاتصال والعيش المعاصر.',
    image: './images/communities/community.jpg?v=4',
  },
];
