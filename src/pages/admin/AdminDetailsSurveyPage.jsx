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
      <h1 className="text-3xl font-bold mb-4">Survey Details for {survey.name}</h1>

      {/* Basic Information Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Basic Information:</h2>
        <ul>
          <li><strong>Name:</strong> {survey.name}</li>
          <li><strong>Age:</strong> {survey.age}</li>
          <li><strong>Hair Kind:</strong> {survey.hairKind}</li>
          <li><strong>Max Products:</strong> {survey.maxProduct}</li>
        </ul>
      </div>

      {/* Product Information Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Product Information:</h2>
        <ul>
          <li><strong>Product 1:</strong> {survey.productName1}</li>
          <li><strong>Product 2:</strong> {survey.productName2}</li>
          <li><strong>Product 3:</strong> {survey.productName3}</li>
        </ul>
      </div>

      {/* Opinions Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Opinions:</h2>
        <ul>
          <li><strong>Opinion 1:</strong> {survey.opinion1}</li>
          <li><strong>Opinion 3:</strong> {survey.opinion3}</li>
        </ul>
      </div>

      {/* Pros Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Pros:</h2>
        <ul>
          <li>{survey.pros1}</li>
          <li>{survey.pros2}</li>
          <li>{survey.pros3}</li>
        </ul>
      </div>

      {/* Cons Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Cons:</h2>
        <ul>
          <li>{survey.cons1}</li>
          <li>{survey.cons2}</li>
          <li>{survey.cons3}</li>
        </ul>
      </div>

      {/* Previous Products Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Previous Products:</h2>
        <ul>
          <li>{survey.previousProduct_c1}</li>
          <li>{survey.previousProduct_c2}</li>
          <li>{survey.previousProduct_c3}</li>
        </ul>
      </div>

      {/* Purchase Information Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Purchase Information:</h2>
        <ul>
          <li>{survey.purchaseInformation1}</li>
          <li>{survey.purchaseInformation2}</li>
          <li>{survey.purchaseInformation3}</li>
        </ul>
      </div>

      {/* Cost Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Cost:</h2>
        <ul>
          <li>{survey.cost1}</li>
          <li>{survey.cost2}</li>
          <li>{survey.cost3}</li>
        </ul>
      </div>

      {/* Add similar sections for other data points */}

    </div>
  );
};

export default AdminDetailsSurveyPage;
