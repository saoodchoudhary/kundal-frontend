
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const ExtraFeedbackSurvey = () => {
  const [feedback, setFeedback] = useState('');
  const dispatch = useDispatch();

  const {formData} = useSelector(state => state.survey)


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of feedback
    dispatch(SurveyAction.stepCount(10))

    dispatch(SurveyAction.submitForm({key:"extraFeedback",value:feedback}))
    console.log('Feedback submitted:', feedback);

    console.log(formData)
    fetch(`${process.env.REACT_APP_API_URL}/survey/add`,{
      method:"POST",
      headers:{
        'Content-Type': "application/json"
      },
      body:JSON.stringify(formData)
    }).then(()=>{
      console.log("success")
    }).catch((error)=>{
      console.log("error",error)
    })

    // You can send the feedback to your backend or perform any other action
  };

  return (

    <div className="myContainer">
    <div className='childContainer-1'>
        <h1 className="question">Additional Feedbacks or Comments</h1>
        <div className='inputContainer'>
        <textarea
          id="feedback"
          name="feedback"
          className="resize-none border rounded w-full py-2 px-3"
          rows="4"
          placeholder='Additional Feedback or Comments'
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        </div>
    </div>
    <button
        onClick={handleSubmit}
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
</div>


  );
};
export default ExtraFeedbackSurvey
