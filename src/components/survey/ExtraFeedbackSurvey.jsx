
import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const ExtraFeedbackSurvey = () => {
  const dispatch = useDispatch();

  const {formData} = useSelector(state => state.survey)
  console.log(formData)

const handleChange = (e)=>{
    dispatch(SurveyAction.submitForm({key:"extraFeedback",value:e.target.value}))
}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // Add logic to handle the submission of feedback
    dispatch(SurveyAction.stepCount(11));
    // You can send the feedback to your backend or perform any other action
  };

  return (

    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question">Additional Feedbacks or Comments</h1>
        <div className='inputContainer'>
        <textarea
          id="feedback"
          name="feedback"
          className=" border rounded w-full py-2 max-w-md px-3 "
          rows="8"
          placeholder='Additional Feedback or Comments'
          onChange={handleChange}
          required
        ></textarea>
        </div>
    </div>
    <button
        type='submit'
        className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
    >
        Next Step
    </button>
    </form>
</div>


  );
};
export default ExtraFeedbackSurvey
