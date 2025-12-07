'use client';

import { useState, useEffect, useMemo } from 'react';
import { Project, ProjectKind } from '@/types/project';
import ProjectCard from '@/components/ProjectCard';
import { Search, Filter, X } from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKind, setSelectedKind] = useState<ProjectKind | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const allProjectKinds = useMemo(() => {
    const kinds = new Set<ProjectKind>();
    projects.forEach(p => p.projectKind && kinds.add(p.projectKind));
    return Array.from(kinds).sort();
  }, [projects]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags?.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [projects]);

  const allTechStack = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.techStack?.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.synopsis.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesKind = selectedKind === 'all' || project.projectKind === selectedKind;

      const matchesTag = !selectedTag || project.tags?.includes(selectedTag);

      const matchesTech = !selectedTech || project.techStack?.includes(selectedTech);

      return matchesSearch && matchesKind && matchesTag && matchesTech;
    });
  }, [projects, searchQuery, selectedKind, selectedTag, selectedTech]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedKind('all');
    setSelectedTag(null);
    setSelectedTech(null);
  };

  const hasActiveFilters = searchQuery || selectedKind !== 'all' || selectedTag || selectedTech;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-red-500 text-lg font-semibold mb-2">Error loading projects</div>
        <div className="text-gray-600 dark:text-gray-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">Explore my work and side projects</p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedKind}
              onChange={(e) => setSelectedKind(e.target.value as ProjectKind | 'all')}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="all">All Types</option>
              {allProjectKinds.map(kind => (
                <option key={kind} value={kind}>
                  {kind.charAt(0).toUpperCase() + kind.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>

            <select
              value={selectedTech || ''}
              onChange={(e) => setSelectedTech(e.target.value || null)}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">All Technologies</option>
              {allTechStack.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-1.5"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-2">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your filters or search query
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>
    </div>
  );
};

export default ProjectsPage;