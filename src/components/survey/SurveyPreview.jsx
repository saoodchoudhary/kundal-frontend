// SurveyPreview.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';
import { MdEdit } from 'react-icons/md';

const SurveyPreview = () => {
  const survey = useSelector(state => state.survey.formData)
  const dispatch = useDispatch();

  const handleEditBtn = () => {
    dispatch(SurveyAction.stepCount(6))
    dispatch(SurveyAction.questionCount1(1))
    dispatch(SurveyAction.questionCount2(1))
    dispatch(SurveyAction.questionCount3(1))
    dispatch(SurveyAction.q2Count(1))
    dispatch(SurveyAction.currentProductCount(1))
  }


  const handleOnSubmit = () => {

    dispatch(SurveyAction.stepCount(12));
    fetch(`${process.env.REACT_APP_API_URL}/survey/add`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(survey)
    }).then(() => {
      console.log("success")
    }).catch((error) => {
      console.log("error", error)
    })
  }
  return (

    <div className=" previewContainer rounded-md shadow-md  mx-auto mt-8 pb-28 bg-transparent">

      <div className="container mx-auto p-1">

        <div className='flex justify-between align-middle px-2 '>
          <h1 className="text-3xl font-bold mb-4">Survey Preview</h1>
          <div onClick={() => handleEditBtn(7, 1, 1)} className='flex self-center px-2 py-1 rounded-md cursor-pointer hover:bg-blue-700 align-middle gap-1 bg-blue-500 text-white'><MdEdit className=' self-center' /> Edit</div>
        </div>

        {/* Basic Information Section */}
        <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
          <h2 className="text-lg font-bold mb-2">Basic Information:</h2>
          <ul>
            <li><strong>Name:</strong> {(survey.name === "") ? "Unknown" : survey.name}</li>
            <li><strong>Email :</strong> {survey.email}</li>
            <li><strong>Phone :</strong> {survey.phone}</li>
            <li><strong>Age:</strong> {survey.age}</li>
            <li><strong>Hair Kind:</strong> {survey.hairKind}</li>
            <li><strong>How Many Products did You Receive?</strong> {survey.maxProduct}</li>
          </ul>
        </div>


        {/* Product 1 Information Section */}
        <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
          <h2 className="text-lg font-bold mb-2">Product 1 Information:</h2>
          <ul>
            <li><strong>Product Name:</strong> {survey.productName1}</li>
            <li><strong>Pros:</strong> {survey.pros1}</li>
            <li><strong>cons:</strong> {survey.cons1}</li>
            <li><strong>What were you using before {survey.productName1}?</strong> {survey.previousProduct_c1}</li>
            <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation1}</li>
            <li><strong>Price :</strong> {survey.cost1}</li>
            <li><strong>Is {survey.productName1} a better replacement for your current Product?</strong> {survey.comparisonSurvey1}</li>
            <li><strong>Have You read the ingredients of {survey.productName1}?</strong> {survey.ingredientAwarness1}</li>
            <li><strong>How much would you be willing to pay for {survey.productName1}?</strong> {survey.willingnesstoPay1}</li>
            <li><strong>How many times you used {survey.productName1} since you received it?</strong> {survey.howManyTimes1}</li>
            <li><strong>Have you seen a difference after using {survey.productName1} to your hair or skin?</strong> {survey.usageInformation1}</li>
          </ul>
        </div>

        {/* Product 2 Information Section */}
        {survey.maxProduct > 1 &&
          <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
            <h2 className="text-lg font-bold mb-2">Product 2 Information:</h2>
            <ul>
              <li><strong>Product Name:</strong> {survey.productName2}</li>
              <li><strong>Pros:</strong> {survey.pros2}</li>
              <li><strong>cons:</strong> {survey.cons2}</li>
              <li><strong>What were you using before {survey.productName2}?</strong> {survey.previousProduct_c2}</li>
              <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation2}</li>
              <li><strong>Price :</strong> {survey.cost2}</li>
              <li><strong>Is {survey.productName2} a better replacement for your current Product?</strong> {survey.comparisonSurvey2}</li>
              <li><strong>Have You read the ingredients of {survey.productName2}?</strong> {survey.ingredientAwarness2}</li>
              <li><strong>How much would you be willing to pay for {survey.productName2}?</strong> {survey.willingnesstoPay2}</li>
              <li><strong>How many times you used {survey.productName2} since you received it?</strong> {survey.howManyTimes2}</li>
            </ul>
          </div>
        }

        {/* Product 3 Information Section */}
        {survey.maxProduct > 2 &&
          <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
            <h2 className="text-lg font-bold mb-2">Product 3 Information:</h2>
            <ul>

              <li><strong>Product Name:</strong> {survey.productName3}</li>
              <li><strong>Pros:</strong> {survey.pros3}</li>
              <li><strong>cons:</strong> {survey.cons3}</li>
              <li><strong>What were you using before {survey.productName3}?</strong> {survey.previousProduct_c3}</li>
              <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation3}</li>
              <li><strong>Price :</strong> {survey.cost3}</li>
              <li><strong>Is {survey.productName3} a better replacement for your current Product?</strong> {survey.comparisonSurvey3}</li>
              <li><strong>Have You read the ingredients of {survey.productName3}?</strong> {survey.ingredientAwarness3}</li>
              <li><strong>How much would you be willing to pay for {survey.productName3}?</strong> {survey.willingnesstoPay3}</li>
              <li><strong>How many times you used {survey.productName3} since you received it?</strong> {survey.howManyTimes3}</li>
            </ul>
          </div>
        }

        {/* Q3 Personal Care Routine Section */}
        <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
          <h2 className="text-lg font-bold mb-2">Personal Care Routine :</h2>
          <ul>
            <li><strong>What is your personal care routine? </strong> {survey.personalCareRoutineA}</li>
            <li><strong>From where do you buy your personal care products?</strong> {survey.personalCareRoutineB}</li>
            <li><strong>What is your hair care routine?</strong> {survey.personalCareRoutineC}</li>
          </ul>
        </div>

        {/* Additional Information Section */}
        <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
          <h2 className="text-lg font-bold mb-2">Additional Information :</h2>
          <ul>
            <li><strong>Allergies:</strong> {survey.allergies}</li>
            <li><strong>Extra Feedback :</strong> {survey.extraFeedback}</li>
          </ul>
        </div>

        
        {/* Q1: Product Preference Section */}
        <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
          <h2 className="text-lg font-bold mb-2">Product Preference :</h2>
          <ul>
            <li><strong>Product Preference :</strong> {survey.q2}</li>
          </ul>
        </div>

      </div>

      <button
        onClick={() => { handleOnSubmit() }}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Submit Survey
      </button>
    </div>

  );
};

export default SurveyPreview;
