import type { Locale } from '../i18n/ui';

export type NavigationKey =
  | 'about'
  | 'faculty'
  | 'curriculum'
  | 'research'
  | 'posts'
  | 'career'
  | 'admissions'
  | 'tips'
  | 'contact'
  | 'location';

export interface NavigationItem {
  key: NavigationKey;
  path: string;
}

export interface NavigationGroup {
  key: 'department' | 'education' | 'research' | 'admissions';
  label: Record<Locale, string>;
  items: readonly NavigationItem[];
}

const items = {
  about: { key: 'about', path: '/about/' },
  faculty: { key: 'faculty', path: '/faculty/' },
  curriculum: { key: 'curriculum', path: '/curriculum/' },
  research: { key: 'research', path: '/research/' },
  posts: { key: 'posts', path: '/posts/' },
  career: { key: 'career', path: '/career/' },
  admissions: { key: 'admissions', path: '/admissions/' },
  tips: { key: 'tips', path: '/tips/' },
  contact: { key: 'contact', path: '/contact/' },
  location: { key: 'location', path: '/location/' },
} satisfies Record<NavigationKey, NavigationItem>;

/** The seven links retained in the primary desktop navigation. */
export const primaryNavigation: readonly NavigationItem[] = [
  items.about,
  items.faculty,
  items.curriculum,
  items.research,
  items.posts,
  items.career,
  items.admissions,
];

/** Full-width menu groups, including routes that are secondary on desktop. */
export const navigationGroups: readonly NavigationGroup[] = [
  {
    key: 'department',
    label: { ko: '학과', en: 'Department' },
    items: [items.about, items.faculty],
  },
  {
    key: 'education',
    label: { ko: '교육', en: 'Education' },
    items: [items.curriculum, items.tips],
  },
  {
    key: 'research',
    label: { ko: '연구와 성과', en: 'Research and Outcomes' },
    items: [items.research, items.posts, items.career],
  },
  {
    key: 'admissions',
    label: { ko: '입학 및 문의', en: 'Admissions and Contact' },
    items: [items.admissions, items.contact, items.location],
  },
];

export function navigationHref(locale: Locale, item: NavigationItem): string {
  return `${locale === 'en' ? '/en' : ''}${item.path}`;
}

/** Match a route and its descendants without treating similarly named routes as active. */
export function isNavigationActive(currentPath: string, href: string): boolean {
  const normalize = (path: string): string => {
    if (path.length <= 1) return path;
    return path.replace(/\/+$/, '');
  };

  const current = normalize(currentPath);
  const target = normalize(href);
  return current === target || current.startsWith(`${target}/`);
}
