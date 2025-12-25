import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://abhishekmraj.vercel.app'),
  title: {
    default: 'Abhishek M Raj | Full Stack Developer & UI/UX Designer',
    template: '%s | Abhishek M Raj'
  },
  description: "Full Stack Developer & UI/UX Designer specializing in Flutter, Django, Next.js. B.Tech CS student at UCEK Trivandrum building efficient, user-centered digital products.",
  keywords: [
    'Abhishek M Raj',
    'Full Stack Developer',
    'Flutter Developer',
    'Django Developer',
    'UI/UX Designer',
    'Next.js Developer',
    'Web Developer',
    'Mobile App Developer',
    'UCEK Trivandrum',
    'Portfolio',
    'Software Engineer',
    'React Developer',
    'TypeScript Developer',
    'Python Developer'
  ],
  authors: [{ name: 'Abhishek M Raj', url: 'https://abhishekmraj.vercel.app' }],
  creator: 'Abhishek M Raj',
  publisher: 'Abhishek M Raj',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhishekmraj.vercel.app',
    title: 'Abhishek M Raj | Full Stack Developer & UI/UX Designer',
    description: 'Full Stack Developer & UI/UX Designer specializing in Flutter, Django, Next.js. Building efficient, user-centered digital products.',
    siteName: 'Abhishek M Raj Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Abhishek M Raj - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek M Raj | Full Stack Developer & UI/UX Designer',
    description: 'Full Stack Developer & UI/UX Designer specializing in Flutter, Django, Next.js.',
    creator: '@Abhishekmraj06',
    images: ['/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3d7e09f0ec5c3aee',
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-100x100.png", sizes: "100x100", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhishek M Raj',
    url: 'https://abhishekmraj.vercel.app',
    image: 'https://abhishekmraj.vercel.app/profile.jpg',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'University College of Engineering Kariavattom',
    },
    sameAs: [
      'https://github.com/abhishek-m-raj',
      'https://www.linkedin.com/in/abhishek-m-raj',
      'https://x.com/Abhishekmraj06',
      'https://www.instagram.com/abhishekmraj06',
    ],
    knowsAbout: [
      'Flutter',
      'Django',
      'Next.js',
      'React',
      'Python',
      'TypeScript',
      'UI/UX Design',
      'Full Stack Development',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
    <head>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#00000000" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="##00000000" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
