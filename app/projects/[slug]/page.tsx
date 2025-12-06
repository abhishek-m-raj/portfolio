'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Project } from '@/types/project';
import GalleryCarousel from '@/components/GalleryCarousel';
import ProjectLinks from '@/components/ProjectLinks';
import ProjectMetadataTags from '@/components/ProjectMetadataTags';
import CollaboratorsList from '@/components/CollaboratorsList';
import Breadcrumbs from '@/components/BreadCrumb';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchProject = async () => {
        try {
          const res = await fetch(`/api/projects/${slug}`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data: Project = await res.json();
          setProject(data);
        } catch (e: any) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };
      fetchProject();
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-8">Loading project details...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (!project) {
    return <div className="text-center py-8 text-gray-500 dark:text-gray-400">Project not found.</div>;
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: project.title, path: undefined }, 
  ];

  return (
    <div className="py-4">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="h-screen mb-10">
        <div className="h-full">
          <div className="flex mb-8 gap-x-4 h-full">
            <div className="w-7/10">
              <div className="">
                  <GalleryCarousel media={project.media} /> 
              </div>
            </div>
            <div className="w-3/10 flex flex-col h-full bg-black rounded-md">
              <img
                src={project.logo}
                alt={project.title}
                className='w-full h-50 rounded-md shrink-0' 
              />
              <div className="grow min-h-0 overflow-y-auto p-4">
                <h1 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h1>
                <p className="text-base font-bold text-gray-900 dark:text-gray-500">
                  {project.synopsis}
                </p>
                <ProjectMetadataTags project={project} />
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Description</h2>
        <p className="text-lg leading-relaxed">{project.description}</p>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-4">Techstack</h2>
        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-4">Collaborators</h2>
        <CollaboratorsList project={project} />
      </div>
    </div>
  );
}