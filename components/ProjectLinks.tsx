import { Project } from "@/types/project";

export default function ProjectLinks({ project } : { project: Project }) {
  const LinkButton = ({ href, colorClass, children }: { href: string; colorClass: string; children: React.ReactNode }) => {
    const baseClasses = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${colorClass}`}
      >
        {children}
      </a>
    );
  };

  if (!project.liveUrl && (!project.links || project.links.length === 0)) {
    return null;
  }

  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-3">

        {project.liveUrl && (
          <LinkButton
            href={project.liveUrl}
            colorClass="bg-green-600 hover:bg-green-700 focus:ring-green-500"
          >
            🚀 Live Demo
          </LinkButton>
        )}

        {project.links &&
          project.links.map((link, idx) => (
            <LinkButton
              key={idx}
              href={link}
              colorClass="bg-gray-600 hover:bg-gray-700 focus:ring-gray-500"
            >
              🔗 Link {idx + 1}
            </LinkButton>
          ))}
      </div>
    </div>
  );
};