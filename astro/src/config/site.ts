export interface SiteAddress {
  ko: string;
  en: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface SiteSocialLinks {
  github: string;
  youtube: string;
  kakao: string;
  wikipedia: string;
}

export interface SiteConfig {
  url: string;
  email: string;
  phone: string;
  address: SiteAddress;
  logo: string;
  universityUrl: string;
  socials: SiteSocialLinks;
}

export const siteConfig: SiteConfig = {
  url: 'https://halla.ai',
  email: 'yj.lee@chu.ac.kr',
  phone: '064-741-7575',
  address: {
    ko: '(63092) 제주특별자치도 제주시 한라대학로 38',
    en: '38 Halla Daehak-ro, Jeju-si, Jeju Special Self-Governing Province 63092',
    streetAddress: '38 Halladaehak-ro',
    addressLocality: 'Jeju',
    addressRegion: 'Jeju Special Self-Governing Province',
    postalCode: '63092',
    addressCountry: 'KR',
  },
  logo: '/images/logo/logo-icon.svg',
  universityUrl: 'https://www.chu.ac.kr',
  socials: {
    github: 'https://github.com/halla-ai',
    youtube: 'https://www.youtube.com/@hallauniv',
    kakao: 'https://open.kakao.com/o/hallauniv-ai',
    wikipedia: 'https://ko.wikipedia.org/wiki/제주한라대학교',
  },
};
