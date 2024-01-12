// AdminDetailsSurveyPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminDetailsSurveyPage = () => {
  const { id } = useParams();
  const [survey, setSurvey] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch survey details from the server based on surveyId
    fetch(`${process.env.REACT_APP_API_URL}/survey/getSurvey/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSurvey(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching survey details:', error));
  }, [id, isLoading]);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{survey.productName}</h1>
      <p className="text-gray-600 mb-6">Customer Feedback: {survey.a}</p>

      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Survey Details:</h2>
        <ul>
          <li className="mb-2">
            <p className="font-semibold">Read Ingredients of Kundal Products: {survey.g}</p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Cost: {survey.e}</p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Better Replacement: {survey.f}</p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Usage Frequency: {survey.i}</p>
          </li>
          <li className="mb-2">
            <p className="font-semibold">Seen a Difference: {survey.j}</p>
          </li>
        </ul>
      </div>

      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Additional Information:</h2>
        <p><strong>Preference:</strong> {survey.preference}</p>
        <p><strong>Please share the list of products that you use:</strong> {survey.routine_a}</p>
        <p><strong>From where do you buy your personal care products?:</strong> {survey.routine_b}</p>
        <p><strong>What is your hair care routine?:</strong> {survey.routine_c}</p>
        <p><strong>Allergies:</strong> {survey.allergies}</p>
        <p><strong>Extra Feedback:</strong> {survey.extraFeedback}</p>
      </div>

      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Contact Information:</h2>
        <p><strong>Name:</strong> {survey.name}</p>
        <p><strong>Contact:</strong> {survey.contact}</p>
        <p><strong>Email:</strong> {survey.email}</p>
      </div>
    </div>
  );
};

export default AdminDetailsSurveyPage;
