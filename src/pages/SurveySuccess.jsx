import React, {  } from 'react';

const SurveySuccess = () => {
  // This state variable will help manage whether to display the success message or not


  return (
    <div className="flex justify-center items-center h-screen">
      
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you for your survey!</h2>
          <p className="text-gray-600">We appreciate your valuable feedback.</p>
        </div>
      
    </div>
  );
};

export default SurveySuccess;
