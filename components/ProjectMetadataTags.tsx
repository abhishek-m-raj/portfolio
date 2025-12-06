import { Project } from '@/types/project';
import React from 'react';

export default function ProjectMetadataTags({ project } : { project: Project }) {
  const metadataTags = [];

  if (project.projectKind) {
    metadataTags.push({ 
      label: project.projectKind, 
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' 
    });
  }
  
  if (project.visibility) {
    metadataTags.push({ 
      label: project.visibility, 
      color: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200'
    });
  }
  
  if (project.status) {
    let statusColor = 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    
    switch (project.status.toLowerCase()) {
      case 'completed':
        statusColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
        break;
      case 'in-progress':
        statusColor = 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
        break;
      case 'archived':
      case 'planned':
        statusColor = 'bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100';
        break;
      default:
        statusColor = 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
    }

    metadataTags.push({ 
      label: project.status.toUpperCase().replace('-', ' '),
      color: statusColor
    });
  }


  if (project.tags && project.tags.length > 0) {
    project.tags.forEach(tag => {
      metadataTags.push({ 
        label: tag, 
        color: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' 
      });
    });
  }

  if (metadataTags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {metadataTags.map((tag, index) => (
        <span
          key={index}
          className={`inline-flex items-center px-3 py-1 
                      text-xs font-semibold rounded-full tracking-wide 
                      ${tag.color}`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
};