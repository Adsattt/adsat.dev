export type PortfolioType = 'personal' | 'commercial';

export interface Portfolio {
  id: number;
  title: string;
  description: string;
  miniDescription?: string;
  year?: string;
  image?: string;
  link?: string;
  tags?: string[];
  type: PortfolioType;
}

export const portfolio: Portfolio[] = [
  {
    id: 0,
    title: 'Client Project 1',
    description: 'A web application built for a client. Placeholder description.',
    miniDescription: 'Web Application',
    year: '2026',
    tags: ['React', 'TypeScript', 'Node'],
    type: 'commercial',
  },
  {
    id: 1,
    title: 'Client Project 2',
    description: 'Mobile app development for a startup.',
    miniDescription: 'Mobile App',
    year: '2025',
    tags: ['React Native', 'Firebase'],
    type: 'commercial',
  },
  {
    id: 2,
    title: 'Personal Tool',
    description: 'A productivity tool built for personal use.',
    miniDescription: 'Dev Tool',
    year: '2025',
    tags: ['Rust', 'CLI'],
    type: 'personal',
  },
  {
    id: 3,
    title: 'Open Source Lib',
    description: 'An open-source library maintained on GitHub.',
    miniDescription: 'Open Source',
    year: '2024',
    tags: ['TypeScript', 'Open Source'],
    type: 'personal',
  },
];
