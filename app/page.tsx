import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl leading-tight mb-6">
        Hi, I'm Abhishek m raj
      </h1>
      <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
        A passionate software developer specializing in building modern web applications with a focus on user experience and performance.
      </p>
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}