export type TechStack =
  | 'godot'
  // Core Languages & Runtimes
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'dart'
  | 'node.js'
  | 'html5'
  | 'css'
  // Frontend Frameworks & Libraries
  | 'react'
  | 'next.js'
  | 'vue.js'
  | 'angular'
  | 'svelte'
  | 'jquery'
  | 'gsap'
  | 'bootstrap'
  | 'tailwind css'
  | 'flutter'
  // Backend Frameworks
  | 'express'
  | 'django'
  | 'spring'
  | 'laravel'
  | 'ruby on rails'
  // Databases
  | 'postgresql'
  | 'mongodb'
  | 'mysql'
  | 'redis'
  | 'sqlite'
  // DevOps & Tooling
  | 'git'
  | 'docker'
  | 'kubernetes'
  | 'npm'
  | 'yarn'
  | 'webpack'
  | 'firebase'
  | 'vercel'
  | 'render'
  | 'babel';

const TechColorMap: Record<TechStack, string> = {
  'godot': '000000',        // Black
  // Core Languages & Runtimes
  'javascript': 'F7DF1E',   // Yellow
  'typescript': '3178C6',   // Blue
  'python': '3776AB',       // Blue
  'dart': '00B4AB',         // Cyan
  'node.js': '339933',      // Green
  'html5': 'E34F26',        // Orange-Red
  'css': '1572B6',         // Blue
  // Frontend Frameworks & Libraries
  'react': '61DAFB',        // Cyan
  'next.js': '000000',      // Black
  'vue.js': '4FC08D',       // Green
  'angular': 'DD0031',      // Red
  'svelte': 'FF3E00',       // Red-Orange
  'jquery': '0769AD',       // Blue
  'gsap': '88CE02',         // Green
  'bootstrap': '7952B3',    // Purple
  'tailwind css': '06B6D4', // Cyan
  'flutter': '02569B',      // Blue'
  // Backend Frameworks
  'express': '000000',      // Black
  'django': '092E20',       // Dark Green
  'spring': '6DB33F',       // Light Green
  'laravel': 'FF2D20',      // Red
  'ruby on rails': 'CC0000',// Red
  // Databases
  'postgresql': '4169E1',   // Royal Blue
  'mongodb': '47A248',      // Green
  'mysql': '4479A1',        // Blue
  'redis': 'DC382D',        // Red
  'sqlite': '003B57',       // Dark Blue
  // DevOps & Tooling
  'git': 'F05032',          // Red
  'docker': '2496ED',       // Blue
  'kubernetes': '326CE5',    // Blue
  'npm': 'CB3837',          // Red
  'yarn': '2C8EBB',         // Blue
  'webpack': '8DD6F9',      // Light Blue
  'firebase': 'FFCA28',     // Yellow
  'vercel': '000000',       // Black
  'render': '000000',       // Black
  'babel': 'FCC700',        // Yellow
};

/**
 * @description Generates the Shields.io badge URL for a list of technologies.
 * The badge background color matches the technology's official logo color.
 * * @param techs An array of technology names matching the TechStack type.
 * @returns An array of strings, where each string is the complete Shields.io badge image URL.
 */
export function generateTechStackBadgeUrl(tech: TechStack): string {
  // Get the color hex code
  const colorHex = TechColorMap[tech];

  // Format the label for the badge URL (replace spaces/dots with underscores)
  const label = tech.replace(/\s/g, '_').replace(/\./g, '_');

  // Format the logo name (lowercase, remove spaces/dots)
  // Shields.io uses this cleaned name to find the corresponding logo icon.
  const logoName = tech.toLowerCase().replace(/\s/g, '').replace(/\./g, '');
  
  // Construct the Shields.io URL
  // We use '&logoColor=white' to ensure the logo icon itself is visible on the colored background.
  return `https://img.shields.io/badge/${label}-${colorHex}?style=for-the-badge&logo=${logoName}&logoColor=white`;
}

export function formatTechStackDisplayName(tech: TechStack): string {
  return tech
    .split(' ') // Split by space (e.g., 'tailwind css')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' ') // Join back with space
    .replace('.js', 'JS') // Handle '.js' names
    .replace('Css', 'CSS') // Handle 'css3' and 'tailwind css'
    .replace('Postgresql', 'PostgreSQL')
    .replace('Mongodb', 'MongoDB')
    .replace('Mysql', 'MySQL')
    .replace('Redis', 'Redis')
    .replace('Sqlite', 'SQLite')
    .replace('Npm', 'npm') // Keep lowercase for npm/yarn
    .replace('Yarn', 'yarn');
};