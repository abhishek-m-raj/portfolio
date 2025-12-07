import { Project } from '@/types/project';
import { generateTechStackBadgeUrl } from '@/types/techstack';

export default function ProjectTechStack({ project } : { project: Project }) {
  if (!project || !project.techStack || project.techStack.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
        Technologies Used:
      </h3>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => {
          const badgeSrc = generateTechStackBadgeUrl(tech)
          return (
            <a
              key={tech}
              href={badgeSrc}
              target="_blank"
              rel="noopener noreferrer"
              title={`Tech: ${tech}`}
            >
              <img
                src={badgeSrc}
                alt={`${tech} badge`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}