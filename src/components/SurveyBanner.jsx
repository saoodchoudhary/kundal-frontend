import React from 'react';
import { Link } from 'react-router-dom';

const SurveyBanner = () => {
  return (
    <div className="bg-blue-400 text-white py-4 px-6 sm:py-8 sm:px-12 md:px-20 lg:px-24 xl:px-32 2xl:px-40">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4 sm:mb-6">
          Share Your Feedback!
        </h2>
        <p className="text-base sm:text-md md:text-lg mb-4 sm:mb-6">
          Help us improve our products. Take our survey and get a chance to win exciting prizes!
        </p>
        <Link to="/survey"  className="bg-white text-blue-400 hover:text-white hover:bg-blue-500 py-2 px-6 rounded-full text-base sm:text-md md:text-lg font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400">
          Take Survey
        </Link>
      </div>
    </div>
  );
};

export default SurveyBanner;
