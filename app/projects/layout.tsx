import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects including WeebHQ, OneOne, AMS, and more. Full stack applications built with Flutter, Django, Next.js, and modern web technologies.',
  openGraph: {
    title: 'Projects | Abhishek M Raj',
    description: 'Portfolio of projects including mobile apps, web applications, and full-stack solutions.',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
