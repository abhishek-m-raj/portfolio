import Link from 'next/link';
import { Project } from '@/types/project';
import { ArrowUpRight, Tag, Award } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  const bannerImage = project.banner ?? project.media?.find(m => m.type === 'image')?.url;

  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 flex flex-col">
        <div className="relative w-full h-48 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden shrink-0">
          {bannerImage ? (
            <>
              <img
                src={bannerImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-600">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
          
          {project.featured && (
            <div className="absolute top-3 left-3 w-7 h-7 bg-yellow-400 rounded-md flex items-center justify-center shadow-md">
              <Award className="w-4 h-4 text-yellow-900" />
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />
        
        <div className="relative p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 pr-2 leading-tight">
              {project.title}
            </h3>
            <div className="shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {project.projectKind || project.tags?.[0] || 'Project'}
            </span>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
            {project.synopsis}
          </p>

          {(project.tags ?? []).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {(project.tags ?? []).slice(0, 4).map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
              {(project.tags ?? []).length > 4 && (
                <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-lg border border-gray-300 dark:border-gray-600">
                  +{(project.tags ?? []).length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out mt-auto" />
      </div>
    </Link>
  );
}