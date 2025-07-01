import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Main App component
const App = () => {
  return (
    // Router context for the entire application
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-100 text-gray-800">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main content area - Routes define which component renders based on the URL */}
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            {/* Home page - Study Description */}
            <Route path="/" element={<HomePage />} />
            {/* Resources page */}
            <Route path="/resources" element={<ResourcesPage />} />
            {/* FAQ page */}
            <Route path="/faq" element={<FAQPage />} />
            {/* Video page */}
            <Route path="/video" element={<VideoPage />} />
            {/* Rectal Video page */}
            <Route path="/rectalvideo" element={<RectalVideoPage />} />
            {/* Fallback for unknown paths - can redirect to home or a custom 404 page */}
            <Route path="*" element={<HomePage />} /> {/* Redirects any unknown path to home */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

// Navbar Component
const Navbar = () => {
  // useNavigate hook is not directly used here but kept for potential future use
  // const navigate = useNavigate();

  // Navigation items with their corresponding paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Study Video', path: '/video' }, // Changed to 'Video'
    { name: 'Rectal Video', path: '/rectalvideo' }, // New navigation item
  ];

  // Get the current path to highlight the active link
  const currentPath = window.location.pathname;

  return (
    <nav className="bg-indigo-900 shadow-lg p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Site Title/Logo - clicking takes you home */}
        <Link to="/" className="text-white text-2xl font-bold rounded-md p-2">
          AMETHST5K
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap space-x-4 md:space-x-6 mt-2 md:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${currentPath === item.path
                  ? 'bg-teal-600 text-white shadow-md' // Vibrant teal for active
                  : 'text-indigo-100 hover:bg-indigo-700 hover:text-white' // Lighter indigo for hover
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Footer Component (no changes needed)
const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white p-6 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AMETHST5K. .</p>
        <p className="mt-2">
            AMETHST 5000  is a research study with the CUNY School of Public Health and Florida International University
        </p>
        <p>Email us at: amethst5000@sph.cuny.edu</p>
        <p>Or text us at: (833) 416-4716</p>
      </div>
    </footer>
  );
};

// Home Page Component (Study Description) (no changes needed for content)
const HomePage = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        #AMETHST5K
      </h1>
      <p className="text-lg leading-relaxed mb-4 text-gray-700">
        AMETHST 5000 is a study for cis and trans men and trans women who have sex with men. 
        It is being conducted by the CUNY School of Public Health in NYC as well as Florida International University in Miami. 
        This study is funded by the National Institutes of Health.
      </p>
      <h2> The Study</h2>
      <p className="text-lg leading-relaxed mb-4 text-gray-700">
        Participants in this study are making a valuable contribution in helping us learn more about how to prevent HIV. 
        Our team is made up of LGBT individuals and community representatives.
         We are driven by a single goal: to do our part in improving the well being of our community.
      </p>
    </section>
  );
};

// Resources Page Component (no changes needed for content)
const ResourcesPage = () => {
  const resources = [
    {
      title: 'Study Protocol Document',
      description: 'Detailed information about the study design, methodology, and objectives.',
      link: '#', // Placeholder link
    },
    {
      title: 'Participant Handbook',
      description: 'A comprehensive guide for participants, covering what to expect and how to prepare.',
      link: '#', // Placeholder link
    },
    {
      title: 'Data Security & Privacy',
      description: 'Information on how your data is collected, stored, and protected.',
      link: '#', // Placeholder link
    },
    {
      title: 'Contact Information',
      description: 'Ways to get in touch with the study team for questions or support.',
      link: '#', // Placeholder link
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        Participant Resources
      </h1>
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
        Here you will find a collection of helpful resources to guide you through your participation
        in AMETHST.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-indigo-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">{resource.title}</h2>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              className="text-teal-600 hover:text-teal-800 font-semibold flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Resource
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6m6-6L10 14"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// FAQ Page Component (no changes needed for content)
const FAQPage = () => {
  const faqs = [
    {
      question: 'What is the purpose of this study?',
      answer: 'The study aims to understand the long-term health and well-being of individuals across the nation, identifying factors that influence health outcomes and developing better prevention strategies.',
    },
    {
      question: 'How long will my participation last?',
      answer: 'Participants will be followed over several years, with periodic data collection points. The exact duration will be communicated during the enrollment process.',
    },
    {
      question: 'Is my personal information kept confidential?',
      answer: 'Absolutely. We adhere to strict data security protocols and all personal information is anonymized and kept confidential in accordance with national privacy regulations.',
    },
    {
      question: 'What kind of data will be collected?',
      answer: 'Data collected may include health surveys, physical measurements, biological samples (e.g., blood, urine), and lifestyle information. All data collection methods are designed to be minimally intrusive.',
    },
    {
      question: 'Can I withdraw from the study at any time?',
      answer: 'Yes, participation is entirely voluntary, and you can withdraw from the study at any time without penalty or affecting your medical care.',
    },
  ];

  // State to manage which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        Frequently Asked Questions (FAQ)
      </h1>
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
        Find answers to common questions about the National Cohort Study.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-indigo-200 rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-indigo-100 hover:bg-indigo-200 focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-xl font-semibold text-indigo-800">{faq.question}</span>
              <svg
                className={`w-6 h-6 text-teal-600 transform transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openFAQ === index && (
              <div className="p-4 bg-white text-gray-700 border-t border-indigo-200">
                <p className="text-lg leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Generic component to display a single video
const VideoContentPage = ({ title, description, embedUrl }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        {title}
      </h1>
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
        {description}
      </p>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture" // Vimeo specific allow attributes
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

// Video Page Component (for the main study video)
const VideoPage = () => {
  const videoDetails = {
    title: 'HIV and Rectal Sample Collection',
    description: 'This video provides a comprehensive overview of the study procedures and what participants can expect.',
    embedUrl: 'https://player.vimeo.com/video/843216767', // Vimeo embed URL
  };
  return <VideoContentPage {...videoDetails} />;
};

// Rectal Video Page Component (for the specific rectal video)
const RectalVideoPage = () => {
  const videoDetails = {
    title: 'Rectal Sample Collection',
    description: 's.',
    embedUrl: 'https://player.vimeo.com/video/843245895', // Vimeo embed URL
  };
  return <VideoContentPage {...videoDetails} />;
};

export default App;
