import React from 'react';

const BriefcaseIcon: React.FC = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.864 23.864 0 0112 15c-3.18 0-6.23-.972-8.4-2.745M12 21v-8m0 0l-3-3m3 3l3-3m-6 3h6"></path>
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
  </svg>
);

const UserIcon: React.FC = () => (
  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </svg>
);

const myData = {
  name: "Abhishek M Raj",
  title: "Full Stack Developer",
  imageUrl: "/profile.jpg",
  bio: `
Hey! I’m Abhishek M Raj, a B.Tech Computer Science student at UCEK Trivandrum passionate about building efficient, user-centered digital products and I’ve always enjoyed taking ideas and shaping them into apps that feel clean, intuitive, and genuinely easy to use. I love building user-friendly experiences — the kind that look simple on the surface but are thoughtfully engineered underneath. Flutter and Django have become my go-to tools because they let me move fast, stay flexible, and craft smooth experiences across mobile, web, and desktop.

Good UI, clean layouts, and small details pull me in. I like figuring out how to make things feel natural, how to reduce friction, and how to build products people instantly understand without being told what to do.

Outside of coding, I’m a big fan of anime, movies, and series. They’re my escape, my inspiration, and honestly a big part of why I care so much about good storytelling and clean presentation — whether it’s on a screen or inside an app.

I’m still learning, still experimenting, and still building. But the goal stays simple: create products that feel good to use and make people smile a little.
  `,
  skills: ["Flutter", "Django", "UI/UX", "Next.js", "Python", "Godot", "Typescript"],
  experience: [
    // { title: "Senior Developer", company: "Tech Solutions Inc.", years: "2020 - Present" },
  ]
};

const AboutMePageDark: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Content Card: Slightly Lighter Dark Grey/Blue */}
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-2xl shadow-indigo-900/50 rounded-xl">
        
        {/* Header and Image Section */}
        <div className="md:flex p-10 items-center border-b border-gray-700">
          <div className="md:shrink-0">
            <img 
              className="h-48 w-48 object-cover rounded-full mx-auto md:mx-0 shadow-lg ring-4 ring-indigo-500/50" 
              src={myData.imageUrl} 
              alt={`Portrait of ${myData.name}`} 
            />
          </div>
          <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl">
              {myData.name}
            </h1>
            <p className="mt-2 text-2xl font-semibold text-indigo-400">
              {myData.title}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-10 grid md:grid-cols-3 gap-10">
          
          {/* Column 1: Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-indigo-400 flex items-center mb-4">
              <UserIcon /><span className="ml-3">Biography</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {myData.bio.trim()}
            </p>
          </div>

          {/* Column 2: Skills & Experience */}
          <div className="md:col-span-1 space-y-8">
            
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 flex items-center mb-4 border-b border-gray-700 pb-2">
                <CodeIcon /><span className="ml-3">Core Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {myData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-indigo-700 text-indigo-100 text-sm font-medium rounded-full shadow-md hover:bg-indigo-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            {/* <div>
              <h3 className="text-2xl font-bold text-indigo-400 flex items-center mb-4 border-b border-gray-700 pb-2">
                <BriefcaseIcon /><span className="ml-3">Experience</span>
              </h3>
              <ul className="space-y-4">
                {myData.experience.map((job, index) => (
                  <li key={index} className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-lg font-semibold text-gray-100">{job.title}</p>
                    <p className="text-gray-400">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.years}</p>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePageDark;