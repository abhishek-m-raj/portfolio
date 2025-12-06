import { Project } from '@/types/project'; 

export default function CollaboratorsList({ project }: { project: Project }) {
  if (!project.collaborators || project.collaborators.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.collaborators.map((collaborator) => (
          <a
            key={collaborator.name}
            href={collaborator.url || '#'}
            target={collaborator.url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`flex items-center p-3 rounded-lg border 
                        transition-shadow duration-200 
                        ${collaborator.url ? 'hover:shadow-md cursor-pointer' : 'cursor-default'} 
                        bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}
          >
            {/* 1. Avatar/Image */}
            {collaborator.image ? (
              <img
                src={collaborator.image}
                alt={`${collaborator.name}'s avatar`}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium">
                {collaborator.name.charAt(0)}
              </div>
            )}

            {/* 2. Name and Role */}
            <div className="flex flex-col min-w-0">
              <span 
                className={`text-base font-medium truncate 
                            ${collaborator.url ? 'text-blue-600 dark:text-blue-400 hover:text-blue-500' : 'text-gray-900 dark:text-white'}`}
              >
                {collaborator.name}
              </span>
              {collaborator.role && (
                <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {collaborator.role}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}