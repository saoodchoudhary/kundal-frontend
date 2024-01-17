import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const ProsAndConsSurveyAB = () => {
  const [responses, setResponses] = useState({
    positive: '',
    negative: ''
  });

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setResponses((prevResponses) => ({
      ...prevResponses,
      [name]: value
    }));
  };

  const { currentProduct} = useSelector(state => state.survey);

    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(currentProduct === 1){
      dispatch(SurveyAction.submitQuestion({key:"pros1",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons1",value:responses.negative}))
      dispatch(SurveyAction.questionCount1(4));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"pros2",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons2",value:responses.negative}))
      dispatch(SurveyAction.questionCount2(4));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"pros3",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons3",value:responses.negative}))
      dispatch(SurveyAction.questionCount3(4));
    }
    
  };

  return (

    <div className="myContainer">
      <form onSubmit={handleSubmit}>
        <div className="mb-4  max-w-md mx-auto">
          <label className="block text-sm font-medium text-gray-600">Pros:</label>
          <textarea
          rows={8}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="positive"
            value={responses.positive}
            onChange={handleInputChange}
            placeholder="List the positive aspects..."
            required
          />
        </div>
        <div className="mb-4 max-w-md mx-auto">
          <label className=" w-full py-2 max-w-md px-3  text-gray-600">Cons:</label>
          <textarea
          rows={8}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="negative"
            value={responses.negative}
            onChange={handleInputChange}
            placeholder="List the negative aspects..."
            required
          />
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


export default ProsAndConsSurveyAB
