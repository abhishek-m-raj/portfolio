import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Next.js SaaS Starter',
    slug: 'nextjs-saas-starter',
    category: 'Web Dev',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    description:
      'A production-ready SaaS starter kit featuring subscription billing, authentication, API routes, and an admin dashboard.',
    media: [
      { type: 'video', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { type: 'youtube', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786', caption: 'Image 1'},
      { type: 'image', url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216' }
    ],
    liveUrl: 'https://nextjs-subscription-payments.vercel.app/',
    links: ['https://github.com/vercel/nextjs-subscription-payments']
  },
  {
    id: '2',
    title: 'Realtime Chat App',
    slug: 'realtime-chat-app',
    category: 'Web Dev',
    techStack: ['Next.js', 'TypeScript', 'Socket.IO', 'Tailwind CSS'],
    description:
      'A modern real-time messaging platform with typing indicators, online status tracking, and persistent chat rooms.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296' }
    ],
    liveUrl: 'https://nextjs-realtime-chat.vercel.app/',
    links: ['https://github.com/AntonioErdeljac/nextjs-realtime-chat']
  },
  {
    id: '3',
    title: 'LinkTree Alternative',
    slug: 'linktree-clone',
    category: 'Web Dev',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'A customizable link-sharing hub with analytics, drag-and-drop ordering, and responsive design.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1506765515384-028b60a970df' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd' }
    ],
    liveUrl: 'https://bio-link-delta.vercel.app/',
    links: ['https://github.com/vercel/examples/tree/main/solutions/bio-link']
  },
  {
    id: '4',
    title: 'AI Chat Application',
    slug: 'ai-chat-application',
    category: 'Game Dev',
    techStack: ['Next.js', 'OpenAI API', 'TypeScript'],
    description:
      'A ChatGPT-style interface with streaming responses, conversation history, and model presets.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d' }
    ],
    liveUrl: 'https://ai-chatbot-steel.vercel.app/',
    links: ['https://github.com/Nutlope/ai-chatbot']
  },
  {
    id: '5',
    title: 'Supabase Todo App',
    slug: 'supabase-todo-app',
    category: 'Web Dev',
    techStack: ['Next.js', 'TypeScript', 'Supabase'],
    description:
      'A real-time collaborative todo manager powered by Supabase with secure auth and synchronized task updates.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1581091012184-5c7b95a2a4f1' }
    ],
    liveUrl: 'https://supabase-nextjs-todo.vercel.app/',
    links: ['https://github.com/supabase/examples/tree/master/examples/nextjs-todo-list']
  },
];