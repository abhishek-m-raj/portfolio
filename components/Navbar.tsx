'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">My Portfolio</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/projects"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};