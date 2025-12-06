import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  path?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center text-sm mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="inline-flex items-center">
              {/* Separator icon (not shown for the first item) */}
              {index > 0 && (
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              )}
              
              {isLast || !item.path ? (
                // Last Item (Current Page) - Not clickable
                <span 
                  className="text-gray-500 dark:text-gray-400 font-medium truncate"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                // Intermediate Item - Clickable Link
                <Link 
                  href={item.path} 
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition duration-150"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}