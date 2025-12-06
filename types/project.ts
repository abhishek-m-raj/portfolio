export type ProjectKind =
  | 'startup'
  | 'open-source'
  | 'hackathon'
  | 'freelance'
  | 'client'
  | 'personal'
  | 'research'
  | 'experiment'
  | 'product'
  | 'case-study';

export type ProjectVisibility =
  | 'public'
  | 'private'
  | 'unlisted'
  | 'restricted';

export type ProjectMedia = {
  type: 'image' | 'video' | 'youtube';
  url: string;
  thumbnail?: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;

  projectKind?: ProjectKind;
  type?: string;
  category?: string;

  techStack: string[];
  description: string;

  logo?: string;
  banner?: string;

  media: ProjectMedia[];

  liveUrl?: string;
  links?: string[];

  collaborators?: {
    name: string;
    url?: string;
    role?: string;
  }[];

  tags?: string[];
  featured?: boolean;

  startDate?: string;
  endDate?: string;
  status?: 'planned' | 'in-progress' | 'completed' | 'archived';

  visibility?: ProjectVisibility;
};