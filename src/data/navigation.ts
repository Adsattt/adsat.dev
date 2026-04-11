export interface NavItem {
  href: string;
  label: string;
  icon: string;
  isExternal?: boolean;
}

export interface NavGroup {
  label: string | null;
  items: NavItem[];
}

export const routes: NavGroup[] = [
  {
    label: null,
    items: [
      { href: '/', label: 'Home', icon: 'home' },
      { href: '/about', label: 'About', icon: 'user' },
      { href: '/portfolio', label: 'Portfolio', icon: 'layers' },
      { href: '/writing', label: 'Writing', icon: 'pen-line' },
    ]
  },
  {
    label: 'Projects',
    items: [
      {
        href: 'https://github.com/Adsattt',
        label: 'GitHub Projects',
        icon: 'github',
        isExternal: true,
      },
    ]
  },
  {
    label: 'Online',
    items: [
      {
        href: 'https://x.com/adsat_',
        label: 'X',
        icon: 'twitter',
        isExternal: true,
      },
      {
        href: 'https://github.com/Adsattt',
        label: 'GitHub',
        icon: 'github',
        isExternal: true,
      },
      {
        href: 'https://www.linkedin.com/in/adsat',
        label: 'LinkedIn',
        icon: 'linkedin',
        isExternal: true,
      },
      {
        href: 'https://www.instagram.com/adsattt',
        label: 'Instagram',
        icon: 'instagram',
        isExternal: true,
      },
    ]
  }
];
