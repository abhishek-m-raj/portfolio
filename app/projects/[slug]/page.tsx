'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Project } from '@/types/project';
import GalleryCarousel from '@/components/GalleryCarousel';

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

  const images = project.media.filter((m) => m.type === 'image').map((m) => m.url);
  const videos = project.media.filter((m) => m.type === 'video');

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">{project.title}</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

      {images.length > 0 && (
        <div className="mb-8">
          <GalleryCarousel media={project.media} />
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Details</h2>
          {project.category && (
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>
          )}
          {project.techStack.length > 0 && (
            <>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Technologies Used:</h3>
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
            </>
          )}
        </div>

        {(project.liveUrl || (project.links && project.links.length > 0)) && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Live Demo
                </a>
              )}
              {project.links &&
                project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Link {idx + 1}
                  </a>
                ))}
            </div>
          </div>
        )}

        {project.collaborators && project.collaborators.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Collaborators</h2>
            <ul className="list-disc list-inside space-y-1">
              {project.collaborators.map((collaborator) => (
                <li key={collaborator.name} className="text-gray-700 dark:text-gray-300">
                  {collaborator.url ? (
                    <a
                      href={collaborator.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {collaborator.name}
                    </a>
                  ) : (
                    collaborator.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};