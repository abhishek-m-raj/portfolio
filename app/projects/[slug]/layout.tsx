import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const keywords = [
    project.title,
    ...(project.tags || []),
    ...(project.techStack || []),
    'project',
    'portfolio',
  ];

  return {
    title: project.title,
    description: project.synopsis || project.description?.substring(0, 160),
    keywords,
    openGraph: {
      title: `${project.title} | Abhishek M Raj`,
      description: project.synopsis || project.description?.substring(0, 160),
      type: 'article',
      images: project.banner || project.logo ? [
        {
          url: project.banner || project.logo || '',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Abhishek M Raj`,
      description: project.synopsis || project.description?.substring(0, 160),
      images: project.banner || project.logo ? [project.banner || project.logo || ''] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
