import { Project } from '@/types/project';
import { generateTechStackBadgeUrl } from '@/types/techstack';

export default function ProjectTechStack({ project } : { project: Project }) {
  if (!project || !project.techStack || project.techStack.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">TechStack</h2>
      </div>
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