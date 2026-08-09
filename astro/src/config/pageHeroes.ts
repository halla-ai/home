import type { Locale } from '../i18n/ui';

export type PageHeroKey =
  | 'about'
  | 'faculty'
  | 'curriculum'
  | 'posts'
  | 'career'
  | 'admissions'
  | 'tips'
  | 'contact'
  | 'location'
  | 'privacy'
  | 'tags';

export type PageHeroOverlay = 'balanced' | 'strong' | 'quiet';

/**
 * The optional fields keep hand-authored legacy hero media, such as the
 * research overview, source-compatible with PageLayout.
 */
export interface PageHeroMedia {
  src: string;
  alt: string;
  avif?: string;
  webp?: string;
  sizes?: string;
  width?: number;
  height?: number;
  position?: string;
  overlay?: PageHeroOverlay;
}

export interface LocalizedPageHero extends PageHeroMedia {
  avif: string;
  webp: string;
  sizes: '100vw';
  width: 1920;
  height: 1080;
  overlay: PageHeroOverlay;
}

interface PageHeroDefinition {
  alt: Record<Locale, string>;
  position: string;
  overlay: PageHeroOverlay;
}

const pageHeroDefinitions: Record<PageHeroKey, PageHeroDefinition> = {
  about: {
    alt: {
      ko: '제주한라대학교 인공지능학과 AI 컴퓨팅 인프라',
      en: 'AI computing infrastructure at the Department of Artificial Intelligence, Cheju Halla University',
    },
    position: 'center 48%',
    overlay: 'balanced',
  },
  faculty: {
    alt: {
      ko: '제주한라대학교 인공지능학과 교수진',
      en: 'Faculty of the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 38%',
    overlay: 'balanced',
  },
  curriculum: {
    alt: {
      ko: '제주한라대학교 인공지능학과 교육과정과 실습',
      en: 'Curriculum and hands-on learning in the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 44%',
    overlay: 'balanced',
  },
  posts: {
    alt: {
      ko: '제주한라대학교 인공지능학과 소식과 활동',
      en: 'News and activities from the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 50%',
    overlay: 'quiet',
  },
  career: {
    alt: {
      ko: '제주한라대학교 인공지능학과 산학협력 현장',
      en: 'Industry and academic collaboration at the Department of Artificial Intelligence, Cheju Halla University',
    },
    position: 'center 42%',
    overlay: 'strong',
  },
  admissions: {
    alt: {
      ko: '제주한라대학교 인공지능학과 수업과 프로젝트 현장',
      en: 'Classes and project work in the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 50%',
    overlay: 'strong',
  },
  tips: {
    alt: {
      ko: '제주한라대학교 인공지능학과 학생 생활 안내',
      en: 'Student guides for the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 50%',
    overlay: 'quiet',
  },
  contact: {
    alt: {
      ko: '제주한라대학교 인공지능학과 연락처 안내',
      en: 'Contact information for the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 56%',
    overlay: 'strong',
  },
  location: {
    alt: {
      ko: '제주한라대학교 인공지능학과 캠퍼스 안내',
      en: 'Campus guide for the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 52%',
    overlay: 'quiet',
  },
  privacy: {
    alt: {
      ko: '제주한라대학교 인공지능학과 개인정보 보호 안내',
      en: 'Privacy information for the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 50%',
    overlay: 'strong',
  },
  tags: {
    alt: {
      ko: '제주한라대학교 인공지능학과 주제별 소식',
      en: 'Topics and stories from the Department of Artificial Intelligence at Cheju Halla University',
    },
    position: 'center 44%',
    overlay: 'quiet',
  },
};

/**
 * Build the shared, localized hero media contract for an inner-page route.
 * The JPEG is the compatibility fallback and the modern formats are served
 * with responsive width descriptors.
 */
export function pageHero(key: PageHeroKey, locale: Locale): LocalizedPageHero {
  const definition = pageHeroDefinitions[key];
  const base = `/images/heroes/${key}-hero`;

  return {
    src: `${base}.jpg`,
    alt: definition.alt[locale],
    avif: `${base}-960.avif 960w, ${base}-1920.avif 1920w`,
    webp: `${base}-960.webp 960w, ${base}-1920.webp 1920w`,
    sizes: '100vw',
    width: 1920,
    height: 1080,
    position: definition.position,
    overlay: definition.overlay,
  };
}
