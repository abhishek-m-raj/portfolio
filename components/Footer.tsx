import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'; 

const socialLinks = [
  { href: 'https://github.com/abhishek-m-raj', Icon: Github, label: 'GitHub Profile' },
  { href: 'https://x.com/Abhishekmraj06', Icon: Twitter, label: 'X/Twitter Profile' },
  { href: 'https://www.linkedin.com/in/abhishek-m-raj', Icon: Linkedin, label: 'LinkedIn Profile' },
  { href: 'https://www.instagram.com/abhishekmraj06', Icon: Instagram, label: 'Instagram Profile' },
];

export default function UltraMinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={link.label}
              >
                <link.Icon size={24} strokeWidth={1.8} /> 
              </a>
            ))}
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <Link href="/" className="font-medium hover:text-blue-600 transition">
              Abhishek M. Raj
            </Link> 
            <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
            <span>&copy; {currentYear} All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};