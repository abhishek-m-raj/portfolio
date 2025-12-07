import { TechStack } from "./techstack";

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
  synopsis: string;
  featured?: boolean;

  status?: 'planned' | 'in-progress' | 'completed' | 'archived';
  projectKind?: ProjectKind;
  visibility?: ProjectVisibility;
  tags?: string[];

  techStack: TechStack[];
  description?: string;

  logo?: string;
  banner?: string;

  media: ProjectMedia[];

  liveUrl?: string;
  links?: string[];

  collaborators?: {
    name: string;
    image?: string;
    url?: string;
    role?: string;
  }[];

  startDate?: string;
  endDate?: string;
};