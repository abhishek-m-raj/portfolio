'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Project } from '@/types/project';
import GalleryCarousel from '@/components/GalleryCarousel';
import ProjectLinks from '@/components/ProjectLinks';
import ProjectMetadataTags from '@/components/ProjectMetadataTags';
import CollaboratorsList from '@/components/CollaboratorsList';
import Breadcrumbs from '@/components/BreadCrumb';
import ProjectTechStack from '@/components/ProjectTechStack';

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
                <GalleryCarousel media={project.media} /> 
            </div>
            <div className="w-3/10 flex flex-col h-full bg-black rounded-md">
              {(project.banner ?? project.logo) ? (
                <>
                  <div className="w-full h-50 rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.banner ?? project.logo}
                      alt={project.title}
                      className="max-h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              ) : (
                <div className="w-full h-50 flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-600">
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              )}
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

      <ProjectTechStack project={project} />

      <div className="my-8">
        {(project.collaborators ?? []).length > 0 && 
          <h2 className="text-3xl font-bold mb-4">Collaborators</h2>
        }
        <CollaboratorsList project={project} />
      </div>
    </div>
  );
}