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
  title: "Abhishek M Raj",
  description: "I’m Abhishek M. Raj, and I’ve always enjoyed taking ideas and shaping them into apps that feel clean, intuitive, and genuinely easy to use. I love building user-friendly experiences — the kind that look simple on the surface but are thoughtfully engineered underneath.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-100x100.png", sizes: "100x100", type: "image/png" },
    ],
    apple: "/favicon-100x100.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
