import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import { Metadata } from 'next';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Abhishek M Raj',
  description: 'Full Stack Developer & UI/UX Designer specializing in Flutter, Django, Next.js. View my portfolio of modern web and mobile applications.',
  openGraph: {
    title: 'Abhishek M Raj | Full Stack Developer & UI/UX Designer',
    description: 'Passionate software developer building modern web applications with a focus on user experience and performance.',
  },
};

const socialLinks = [
  { href: 'https://github.com/abhishek-m-raj', Icon: Github, label: 'GitHub' },
  { href: 'https://x.com/Abhishekmraj06', Icon: Twitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/abhishek-m-raj', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/abhishekmraj06', Icon: Instagram, label: 'Instagram' },
];

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <AnimatedBackground />
      <div style={{ position: 'absolute', zIndex: 10, width: '100%', height: '100%'}}>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-indigo-600 dark:text-indigo-400">
              Abhishek M Raj
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            A passionate software developer specializing in building modern web applications with a focus on user experience and performance.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-xl shadow-lg transform transition duration-300 ease-in-out 
                text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              View My Projects
            </Link>
            <Link
              href="https://rxresu.me/abhishek-m-raj/abhishek-m-raj"
              target='blank'
              className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 border border-gray-300 dark:border-gray-700 text-base sm:text-lg font-medium rounded-xl shadow-md transform transition duration-300 ease-in-out 
                text-gray-900 bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-5 3h4M16 7a4 4 0 01-4-4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V9a4 4 0 01-4-4V7z"/></svg>
              Resume
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                aria-label={`Visit my ${link.label} profile`}
                title={link.label}
              >
                <link.Icon size={24} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}