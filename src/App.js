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
    <nav className="bg-primary-navbar shadow-lg p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Site Title/Logo - clicking takes you home */}
        <Link to="/" className="text-gray-900 text-2xl font-bold rounded-md p-2">
          AMETHST5K
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap space-x-4 md:space-x-6 mt-2 md:mt-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-900
                ${currentPath === item.path
                  ? 'bg-purple-600 text-gray-900 shadow-md' // Vibrant teal for active
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
    <footer className="bg-primary-navbar text-gray-900 p-6 mt-8">
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
      <h2 className="text-2xl font-extrabold text-indigo-800 mb-6"> The Study</h2>
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
      title: 'Looking for HIV testing near you?',
      description: 'Final local HIV testing sites.',
      link: 'https://gettested.cdc.gov', // Placeholder link
    },
    {
      title: 'Looking for an HIV care provider or HIV treatment?',
      description: 'Find a provider and get connected to treatment.',
      link: 'https://locator.hiv.gov/map/', // Placeholder link
    },
    {
      title: 'Where can I find PrEP? (Truvada, Descovy, Apretude)',
      description: 'Learn where you can get PrEP.',
      link: 'https://preplocator.org', // Placeholder link
    },
    {
      title: 'Find your local food bank',
      description: 'Here you can locate your closest food bank.',
      link: 'https://www.feedingamerica.org/find-your-local-foodbank', // Placeholder link
    },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
        Participant Resources
      </h1>
      <p className="text-lg leading-relaxed mb-8 text-center text-gray-700">
       Team A5K has put together a list of resources that may help you find services related to HIV, 
       LGBTQ+ health, PrEP, substance use, mental health and social support. 
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
      question: 'Why is the study called AMETHST 5000 (A5K)?',
      answer: 'Great question. AMETHST stands for the American Transformative HIV Study, and the 5000 represents all of you who are contributing to this collective effort to end the HIV epidemic. Thank you all for your participation! Of note, you do not need to have American citizenship to participate. You just need to be a resident of the U.S.A. or one of its territories. .',
    },
    {
      question: 'What kind of HIV test are you doing?',
      answer: 'We are using the OraSure oral fluid collection device test, which is an at-home self-collected HIV test kit. The kit allows you to collect an oral fluid sample that you send to our lab (in a prepaid envelop). This kind of test is looking for HIV antibodies, not HIV itself. If a person is exposed to HIV, they develop HIV antibodies--which can take up to three months to develop in order for this test to detect them. So, if the results of the test come back as HIV-negative, then the test did not detect any HIV antibodies—that means that you were HIV negative as of 3 months ago. If you had a more recent exposure to HIV, this test wouldn’t be able to tell you anything about that, because that experience is too recent for this test to detect. There are tests that are able to detect more recent HIV exposures, but you would need to get that test from a medical provider. Our website has resources on how to find a provider.',
    },
    {
      question: 'Can you tell me more about rectal testing in A5K?',
      answer: 'Yes. Over the course of the study, we will be collecting rectal samples each year. At the end of the study, some participants will have their samples selected to test for rectal gonorrhea and chlamydia, as well as to test for rectal immune health. However, not all swabs will be tested, and those that are will not be tested until the very end of the study (years from now.) If your swab is tested for gonorrhea and chlamydia, we will let you know the results. But remember, because we don’t know if your swab will be selected and we won’t be doing any testing until the study is complete, it is important for you to get tested outside of this study by a healthcare provider. Using the CDC’s provider finder, you can find STI testing near you. You can even use the menu items to select “show only free or low-cost provider” and to search specifically for STI testing. https://gettested.cdc.gov/',
    },
    {
      question: 'Why are you testing for “rectal immune health”? And will you tell me the results of that test?[',
      answer: 'As part of our research aims, we are looking at factors associated with immune system health.  At the end of the study, some participants will have their samples selected to test for both rectal gonorrhea and chlamydia, and for rectal immune health. However, the immune health testing we are performing is experimental and is not the type of test a medical provider would typically do, since it’s not meant to diagnose a specific health condition. For these reasons, we will not be reporting the results from the rectal immune health tests back to you, and we encourage you to speak with you doctor if you’re concerned about your immune health.',
    },
    {
      question: 'Why don’t you know if my rectal swabs will be selected for testing?',
      answer: 'Rectal testing in this study is being used to determine if rectal STIs and the rectal immune system are predictive of HIV seroconversion (which refers to when an individual acquires HIV). This is being studied experimentally by looking at a sample of rectal swabs from people living with HIV, as well as those who are HIV negative. Because this is a scientific experiment, we will only be testing as many samples as we absolutely need to answer our research question—in other words, this test is not intended to monitor your individual health, but rather is used to answer a larger scientific question. However, we will deliver your STI testing results if your swabs were selected. But again, because these results will be delivered long after the samples were collected, we encourage you to test outside of the study.',
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
        Find answers to common questions about AMETHST5K.
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
    description: 'This video provides a comprehensive overview of the sample collection procedures.',
    embedUrl: 'https://player.vimeo.com/video/843216767', // Vimeo embed URL
  };
  return <VideoContentPage {...videoDetails} />;
};

// Rectal Video Page Component (for the specific rectal video)
const RectalVideoPage = () => {
  const videoDetails = {
    title: 'Rectal Sample Collection',
    description: 'This video provides a comprehensive overview of rectal sample collection procedures.',
    embedUrl: 'https://player.vimeo.com/video/843245895', // Vimeo embed URL
  };
  return <VideoContentPage {...videoDetails} />;
};

export default App;
