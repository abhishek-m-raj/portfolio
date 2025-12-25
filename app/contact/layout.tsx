import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Abhishek M Raj. Connect on GitHub, LinkedIn, Twitter, Instagram, or send a message for collaboration opportunities and project inquiries.',
  openGraph: {
    title: 'Contact | Abhishek M Raj',
    description: 'Get in touch for collaboration opportunities and project inquiries.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
