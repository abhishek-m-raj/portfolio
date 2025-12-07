'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Code } from 'lucide-react'; 

const navItems = [
  { href: '/projects', label: 'Projects' , key: 'projects'},
  { href: '/contact', label: 'Contact' , key: 'contact1' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  const baseClasses = "text-sm transition-colors px-3 py-2 rounded-md";
  const activeClasses = "text-gray-900 dark:text-white font-semibold bg-gray-100 dark:bg-gray-800"; 
  const inactiveClasses = "text-gray-600 dark:text-gray-400 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800"; 

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {children}
    </Link>
  );
};

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActionLink: React.FC<ActionLinkProps> = ({ href, children }) => {
  return (
    <Link 
      href={href} 
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 px-4 py-2 
                 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 
                 shadow hover:bg-gray-700 dark:hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isPathActive = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <nav className="bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 dark:bg-gray-950/95 dark:supports-backdrop-filter:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex items-center space-x-6"> 
            <Link href="/" className="flex items-center shrink-0">
              <Code className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">Abhishek M Raj</span>
            </Link>
            <div className="hidden sm:flex sm:items-center sm:space-x-1"> 
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  isActive={isPathActive(item.href)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block">
              <ActionLink href="/contact">
                Contact Me
              </ActionLink>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none sm:hidden"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden border-t border-gray-200 dark:border-gray-800`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[...navItems, { href: '/contact', label: 'Contact', key: 'contact2'}].map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-sm font-medium rounded-md px-3 py-2 text-left transition ${
                isPathActive(item.href)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}