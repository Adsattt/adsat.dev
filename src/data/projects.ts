export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  externalLink?: string;
  active?: boolean;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'Project Alpha',
    description: 'A cool project you are building',
    active: true,
    tags: ['Active', 'TypeScript', 'Astro'],
  },
  {
    id: 1,
    title: 'Project Beta',
    description: 'Another side project in progress',
    active: true,
    tags: ['Active', 'React', 'Node'],
  },
  {
    id: 2,
    title: 'Experiment X',
    description: 'Weekend experiment with new tech',
    active: false,
    tags: ['Archived', 'Rust'],
  },
];
