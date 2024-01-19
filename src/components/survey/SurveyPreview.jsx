// SurveyPreview.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const SurveyPreview = () => {
    const survey = useSelector(state => state.survey.formData)
const dispatch = useDispatch();
    const handleOnSubmit = ()=>{
        
    dispatch(SurveyAction.stepCount(12));
        fetch(`${process.env.REACT_APP_API_URL}/survey/add`,{
            method:"POST",
            headers:{
              'Content-Type': "application/json"
            },
            body:JSON.stringify(survey)
          }).then(()=>{
            console.log("success")
          }).catch((error)=>{
            console.log("error",error)
          })
    }
  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-xl mx-auto mt-8">
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Survey Details for {(survey.name === "") ? "Unknown": survey.name}</h1>

      {/* Basic Information Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Basic Information:</h2>
        <ul>
          <li><strong>Name:</strong> {(survey.name === "") ? "Unknown": survey.name}</li>
          <li><strong>Email :</strong> {survey.email}</li>
          <li><strong>Phone :</strong> {survey.phone}</li>
          <li><strong>Age:</strong> {survey.age}</li>
          <li><strong>Hair Kind:</strong> {survey.hairKind}</li>
          <li><strong>Max Products:</strong> {survey.maxProduct}</li>
        </ul>
      </div>

      {/* Product Information Section */}
      <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Product 1 Information:</h2>
        <ul>
          <li><strong>Product Name:</strong> {survey.productName1}</li>
          <li><strong>Pros:</strong> {survey.pros1}</li>
          <li><strong>cons:</strong> {survey.cons1}</li>
          <li><strong>Previous Product:</strong> {survey.previousProduct_c1}</li>
          <li><strong>Purchase Information:</strong> {survey.purchaseInformation1}</li>
          <li><strong>Cost :</strong> {survey.cost1}</li>
          <li><strong>Comparison :</strong> {survey.comparisonSurvey1}</li>
          <li><strong>Ingredient Awarness :</strong> {survey.ingredientAwarness1}</li>
          <li><strong>Willingness to Pay :</strong> {survey.willingnesstoPay1}</li>
          <li><strong>howManyTimes:</strong> {survey.howManyTimes1}</li>
          <li><strong>howManyTimes:</strong> {survey.usageInformation1}</li>
        </ul>
      </div>

    {survey.maxProduct > 1 && <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Product 2 Information:</h2>
        <ul>
          <li><strong>Product Name:</strong> {survey.productName2}</li>
          <li><strong>Pros:</strong> {survey.pros2}</li>
          <li><strong>cons:</strong> {survey.cons2}</li>
          <li><strong>Previous Product:</strong> {survey.previousProduct_c2}</li>
          <li><strong>Purchase Information:</strong> {survey.purchaseInformation2}</li>
          <li><strong>Cost :</strong> {survey.cost2}</li>
          <li><strong>Comparison :</strong> {survey.comparisonSurvey2}</li>
          <li><strong>Ingredient Awarness :</strong> {survey.ingredientAwarness2}</li>
          <li><strong>Willingness to Pay :</strong> {survey.willingnesstoPay2}</li>
          <li><strong>howManyTimes:</strong> {survey.howManyTimes2}</li>
        </ul>
      </div>
      } 
    {survey.maxProduct > 2 && <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Product 3 Information:</h2>
        <ul>
          <li><strong>Product Name:</strong> {survey.productName3}</li>
          <li><strong>Pros:</strong> {survey.pros3}</li>
          <li><strong>cons:</strong> {survey.cons3}</li>
          <li><strong>Previous Product:</strong> {survey.previousProduct_c3}</li>
          <li><strong>Purchase Information:</strong> {survey.purchaseInformation3}</li>
          <li><strong>Cost :</strong> {survey.cost3}</li>
          <li><strong>Comparison :</strong> {survey.comparisonSurvey3}</li>
          <li><strong>Ingredient Awarness :</strong> {survey.ingredientAwarness3}</li>
          <li><strong>Willingness to Pay :</strong> {survey.willingnesstoPay3}</li>
          <li><strong>howManyTimes:</strong> {survey.howManyTimes3}</li>
        </ul>
      </div>
      } 

   
   <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2"> *Q2: Product Preference :</h2>
        <ul>
          <li><strong>Product Preference :</strong> {survey.q2}</li>
        </ul>
      </div>

   <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Q3 Personal Care Routine :</h2>
        <ul>
          <li><strong>What is your personal care routine?:</strong> {survey.personalCareRoutineA}</li>
          <li><strong>From where do you buy your personal care products? :</strong> {survey.personalCareRoutineB}</li>
          <li><strong>What is your hair care routine?:</strong> {survey.personalCareRoutineC}</li>
        </ul>
      </div>
   
   <div className="border-t border-b border-gray-300 my-4 py-2">
        <h2 className="text-lg font-bold mb-2">Additional Information :</h2>
        <ul>
          <li><strong>Allergies:</strong> {survey.allergies}</li>
          <li><strong>Extra Feedback :</strong> {survey.extraFeedback}</li>
        </ul>
      </div>
      
       

    </div>

      <button
        onClick={()=>{handleOnSubmit()}}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Submit Survey
    </button>
    </div>
  );
};

export default SurveyPreview;