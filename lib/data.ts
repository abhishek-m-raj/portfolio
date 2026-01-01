import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: '1',
    title: 'WeebHQ',
    slug: 'weebhq',
    featured: true,
    synopsis: 'A cross-platform anime streaming ecosystem engineered for scale and built for a modern, community-driven viewing experience.',
    banner: '/projects-media/weebhq/banner.png',
    tags: ['FullStack', 'UI/UX', 'CrossPlatform'],
    status: 'archived',
    visibility: 'private',
    projectKind: 'personal',
    techStack: ['flutter', 'django', 'python', 'dart', 'postgresql', 'git'],
    description: `A cross-platform anime streaming ecosystem engineered for scale and built for a modern, community-driven viewing experience. WeebHQ delivers a high-performance anime streaming experience across mobile, web, desktop, and Android TV. Powered by a modular Flutter architecture and a custom data aggregation pipeline, the platform brings together streaming, scheduling, social features, and user-generated content to create a unified destination for anime fans. \n Multi-Platform Delivery
Unified Flutter codebase
Optimized for Android, Web, Desktop, and Android TV
Consistent UI/UX built on the 8-pixel grid with nice typography
Smart Content Pipeline
Aggregates metadata, schedules, and episodes from multiple anime providers
Unified model for multi-source and single-source content
Support for sub/dub, multiple streaming servers, and fallback logic
Fast, pure-Dart scraping layer
Personalized Viewing Experience
Continue Watching with real-time progress sync
Device-agnostic resume
Watch history, favorites, and recommendations
Social Layer
Built-in Forum for discussions
Friends, activity feed, and status updates
Community-driven spaces
User Profiles
Customizable user profiles
Per-user lists, watch progress, and preferences
Multi-device login support
Performance & Reliability
Optimized caching for metadata and episodes
Lightweight network architecture
MediaKit-powered playback`,
    media: [
      { type: 'image', url: '/projects-media/weebhq/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 2.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 3.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 4.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 5.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 6.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 7.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 8.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 9.png'},
      { type: 'image', url: '/projects-media/weebhq/Screenshot 10.png'},
    ],
  },
  {
    id: '2',
    title: 'OneOne',
    slug: 'oneone',
    featured: true,
    synopsis: 'Open Source social media service that turns your phone into a walkie-talkie',
    banner: '/projects-media/oneone/banner.png',
    tags: ['Frontend', 'UI/UX', 'App', 'CrossPlatform'],
    status: 'in-progress',
    visibility: 'public',
    projectKind: 'startup',
    techStack: ['flutter', 'dart', 'mongodb', 'firebase', 'git'],
    description: `Open Source social media service that turns your phone into a walkie-talkie. The app is an opensource alternate of the popular social media app, TenTen. The project was started by richard chettan. Then he invited me to collaborate on the frontend part. The app will be launched on the playstore in the next few months.`,
    media: [
      { type: 'image', url: '/projects-media/oneone/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/oneone/Screenshot 2.png'},
    ],
    liveUrl: 'http://oneoneapp.in',
    links: [
      'https://github.com/oneoneapp/oneoneapp'
    ],
    collaborators: [
      {
        name: 'Richard Shaju',
        image: 'https://avatars.githubusercontent.com/u/108459152?v=4',
        url: 'https://richard.is-a.dev/',
        role: 'Founder'
      },
      {
        name: "Abhishek M Raj",
        image: "https://avatars.githubusercontent.com/u/130775015?v=4",
        url: "https://github.com/abhishek-m-raj",
        role: "Co-Founder"
      },
    ]
  },
  {
    id: '3',
    title: 'AMS',
    slug: 'ams',
    featured: false,
    synopsis: 'The UCEK Attendance Management System is a comprehensive platform developed by the MuLearn Club at University College of Engineering Kariavattom.',
    banner: '/projects-media/ams/banner.png',
    tags: ['Frontend', 'UI/UX', 'Web'],
    status: 'in-progress',
    visibility: 'public',
    projectKind: 'contribution',
    techStack: ['next.js', 'node.js', 'react', 'typescript', 'tailwind css', 'git'],
    description: 'The UCEK Attendance Management System is a comprehensive platform developed by the μLearn UCEK. This application streamlines academic tracking and management for students, teachers, and parents, providing real-time access to attendance records, grades, assignments, and more',
    media: [
      { type: 'image', url: '/projects-media/ams/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/ams/Screenshot 2.png'},
      { type: 'image', url: '/projects-media/ams/Screenshot 3.png'},
      { type: 'image', url: '/projects-media/ams/Screenshot 4.png'},
    ],
    liveUrl: 'https://ams.mulearn.uck.ac.in/',
    links: [
      'https://github.com/mulearnucek/ams-frontend',
      'https://github.com/abhishek-m-raj/ams-frontend'
    ],
  },
  {
    id: '4',
    title: 'Twenty Seven Degrees',
    slug: 'twenty-seven-degrees',
    featured: true,
    synopsis: 'Twenty Seven Degrees ArchTech provides sustainable architectural design and construction project management service working across residential, commercial, and institutional projects. We design thoughtful, durable spaces rooted in how people live, respond to place, and evolve over time.',
    banner: '/projects-media/twenty-seven-degrees/banner.png',
    tags: ['Frontend', 'UI/UX', 'Web', 'Landing page'],
    status: 'completed',
    visibility: 'private',
    projectKind: 'freelance',
    techStack: ['next.js', 'node.js', 'react', 'gsap', 'typescript', 'tailwind css', 'git'],
    description: 'Twenty Seven Degrees ArchTech provides sustainable architectural design and construction project management service working across residential, commercial, and institutional projects. We design thoughtful, durable spaces rooted in how people live, respond to place, and evolve over time.',
    media: [
      { type: 'video', url: '/projects-media/twenty-seven-degrees/Recording.mp4'},
      { type: 'image', url: '/projects-media/twenty-seven-degrees/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/twenty-seven-degrees/Screenshot 2.png'},
      { type: 'image', url: '/projects-media/twenty-seven-degrees/Screenshot 3.png'},
      { type: 'image', url: '/projects-media/twenty-seven-degrees/Screenshot 4.png'},
      { type: 'image', url: '/projects-media/twenty-seven-degrees/Screenshot 5.png'},
    ],
    liveUrl: 'https://tsdbuilds.com/'
  },
  {
    id: '5',
    title: 'Maveli Pradarshanam',
    slug: 'maveli-pradarshanam',
    featured: false,
    synopsis: 'A portfolio website dedicated to the legendary King Mahabali (Maveli), created for the "Maveli Pradarshanam" competition organized by the FOSS Club at UCEK. 👑',
    banner: '/projects-media/maveli-pradarshanam/banner.png',
    tags: ['Frontend', 'UI/UX', 'Web', 'Landing page'],
    status: 'completed',
    visibility: 'public',
    projectKind: 'competition',
    techStack: ['react', 'next.js', 'node.js', 'javascript', 'css', 'git'],
    description: 'A portfolio website dedicated to the legendary King Mahabali (Maveli), created for the "Maveli Pradarshanam" competition organized by the FOSS Club at UCEK👑. Maveli Pradarshanam is a single-page portfolio website that serves as a modern digital pradarshanam (exhibition) of King Mahabalis story, legacy, and cultural significance.',
    media: [
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 2.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 3.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 4.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 5.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 6.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 7.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 8.png'},
      { type: 'image', url: '/projects-media/maveli-pradarshanam/Screenshot 9.png'},
    ],
    liveUrl: 'https://maveli-pradarshanam.vercel.app/',
    links: [
      'https://github.com/abhishek-m-raj/maveli-pradarshanam'
    ],
  },
  {
    id: '6',
    title: 'MarinePatch',
    slug: 'marine-patch',
    featured: false,
    synopsis: 'A game based on ocean cleanup',
    tags: ['GameDev', 'Art', 'SFX', 'CrossPlatform', 'Game'],
    status: 'archived',
    visibility: 'public',
    projectKind: 'personal',
    techStack: ['godot', 'git'],
    description: 'A game based on ocean cleanup started during to the open sea mrbeast champain when a game jam called open sea was hosted. Worked about one year on this project. Later cancelled',
    media: [],
    links: [
      'https://github.com/abhishek-m-raj/Marine-patch'
    ],
  },
  {
    id: '7',
    title: 'Portfolio',
    slug: 'portfolio',
    featured: false,
    synopsis: 'personal portfolio',
    tags: ['Frontend', 'UI/UX', 'Web', 'Landing page'],
    status: 'completed',
    visibility: 'public',
    projectKind: 'personal',
    techStack: ['next.js', 'node.js', 'react', 'typescript', 'tailwind css', 'vercel', 'git'],
    description: 'personal portfolio',
    media: [],
    liveUrl: 'https://abhishek-m-raj.vercel.app/',
    links: [
      'https://github.com/abhishek-m-raj/portfolio'
    ],
  },
  {
    id: '8',
    title: 'EventEase',
    slug: 'event-ease',
    featured: false,
    banner: '/projects-media/event-ease/banner.png',
    synopsis: 'EventEase is a full-stack Django application built for managing and streamlining event workflows. It was developed in 24 hours during Sphota Hackathon 2025 by our team 2MuchCoffee',
    tags: ['FullStack'],
    status: 'completed',
    visibility: 'public',
    projectKind: 'hackathon',
    techStack: ['django', 'python', 'html5', 'css', 'javascript', 'render', 'sqlite', 'git'],
    description: 'EventEase is a full-stack Django application built for managing and streamlining event workflows. It was developed in 24 hours during Sphota Hackathon 2025 , hosted by St. Thomas College of Engineering\\\'s IEEE club section and University College of Engineering Kariavattom (UCEK)\\\'s IEEE club divisions. Our solution helps event organizers and participants interact seamlessly with unique real-time features.',
    media: [
      { type: 'video', url: '/projects-media/event-ease/presentation.mp4'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 1.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 2.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 3.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 4.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 5.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 6.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 7.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 8.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 9.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 10.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 11.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 12.png'},
      { type: 'image', url: '/projects-media/event-ease/Screenshot 13.png'},
    ],
    liveUrl: 'https://eventease-uowq.onrender.com/',
    links: [
      'https://github.com/2MuchCoffe/EventEase',
    ],
    collaborators: [
      {
        name: "Munjid",
        image: "https://avatars.githubusercontent.com/u/56600568?s=70&v=4",
        url: "https://github.com/munjidvh",
        role: "Lead Developer"
      },
      {
        name: "Abhishek M Raj",
        image: "https://avatars.githubusercontent.com/u/130775015?v=4",
        url: "https://github.com/abhishek-m-raj",
        role: "Lead Developer"
      },
      {
        name: "Nazeeh",
        image: "https://avatars.githubusercontent.com/u/72809627?s=70&v=4",
        url: "https://github.com/nazeeh-v",
        role: "UI/Ux Designer"
      },
      {
        name: "Akhil",
        role: "Ideas and Presentation"
      },
    ]
  },
  {
    id: '9',
    title: 'ZapTV',
    slug: 'zaptv',
    featured: false,
    synopsis: 'A iptv client for android and android tv',
    tags: ['Frontend', 'CrossPlatform'],
    status: 'archived',
    visibility: 'public',
    projectKind: 'personal',
    techStack: ['flutter', 'dart', 'git'],
    description: 'A iptv client for android and android tv',
    media: [],
    links: [
      'https://github.com/abhishek-m-raj/ZapTV'
    ],
  },
  {
    id: '10',
    title: 'Listify',
    slug: 'listify',
    featured: false,
    synopsis: 'A todo list web app',
    tags: ['Frontend'],
    status: 'archived',
    visibility: 'public',
    projectKind: 'personal',
    techStack: ['react', 'node.js', 'git'],
    description: 'A todo list web app',
    media: [],
    links: [
      'https://github.com/abhishek-m-raj/listify'
    ],
  },
];