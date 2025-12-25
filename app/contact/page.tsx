'use client'; 

import React, { useState } from 'react';

// Metadata for the page - moved to a separate metadata export since this is a client component
// For proper SEO, consider creating a parallel route or layout for metadata
import { Mail, Phone, MapPin } from 'lucide-react'; 
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'; 

const socialLinks = [
  { href: 'https://github.com/abhishek-m-raj', Icon: Github, label: 'GitHub Profile' },
  { href: 'https://x.com/Abhishekmraj06', Icon: Twitter, label: 'X/Twitter Profile' },
  { href: 'https://www.linkedin.com/in/abhishek-m-raj', Icon: Linkedin, label: 'LinkedIn Profile' },
  { href: 'https://www.instagram.com/abhishekmraj06', Icon: Instagram, label: 'Instagram Profile' },
];

const MailtoContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipient = "abhishek.m.raj@example.com";
    
    const subject = `New Inquiry from ${formData.name} via Portfolio`;
    const body = `
      Hello Abhishek,

      I am ${formData.name} (${formData.email}) and I'm writing to you about:

      ---
      ${formData.message}
      ---

      Best regards,
      ${formData.name}
    `.trim();

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.target = '_blank';
    tempLink.rel = 'noopener noreferrer';
    tempLink.click();

    setFormData({ name: '', email: '', message: '' }); 
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                    Get in Touch
                </h1>
                <p className="mt-3 text-xl text-gray-600 dark:text-gray-400">
                    Fill out the form below and I'll receive it directly in my inbox.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            <div className="lg:col-span-1 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Info</h2>
                
                <div className="flex flex-col justify-between gap-8">
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <Mail className="w-6 h-6 text-blue-500 mr-4 mt-1 shrink-0" />
                            <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                            <a href="mailto:abhishekmraj06@gmail.com" target = '_blank' className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                                abhishekmraj06@gmail.com
                            </a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <MapPin className="w-6 h-6 text-blue-500 mr-4 mt-1 shrink-0" />
                            <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                            <span className="text-gray-600 dark:text-gray-400">Aruvikkara, Kerala, India</span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex justify-evenly">
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
                </div>
            </div>
            
            <div className="lg:col-span-2 p-8 rounded-xl bg-white dark:bg-gray-900 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Write Me an Email</h2>
                <MailtoContactForm />
            </div>
            </div>
        </div>
    </div>
  );
}