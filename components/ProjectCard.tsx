import Link from 'next/link';
import { Project } from '@/types/project';

export default function ProjectCard({ project } : { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Category: {project.category}
          </p>
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
        </div>
      </div>
    </Link>
  );
};