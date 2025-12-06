'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ['All', 'Web Dev', 'Mobile', 'UI/UX', 'Game Dev'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Project[] = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Projects</h1>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
