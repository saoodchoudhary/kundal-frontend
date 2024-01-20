import React, { useEffect, useState } from 'react';
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

  const { currentProduct , product1 , product2 , product3} = useSelector(state => state.survey);

  useEffect(()=>{
    if(currentProduct ===1){
      setResponses({positive : product1.pros1 , negative : product1.cons1 });
    }
    else if(currentProduct === 2){
      setResponses({positive : product2.pros2 , negative : product2.cons2 });
    }
    else if(currentProduct === 3) {
      setResponses({positive : product3.pros3 , negative : product3.cons3 });
    }
  },[product1.pros1, product2.pros2 , product3.pros3, product1.cons1, product2.cons2, product3.cons3, currentProduct])

    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(currentProduct === 1){
      dispatch(SurveyAction.submitQuestion({key:"pros1",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons1",value:responses.negative}))
      dispatch(SurveyAction.questionCount1(3));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"pros2",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons2",value:responses.negative}))
      dispatch(SurveyAction.questionCount2(3));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"pros3",value:responses.positive}))
      dispatch(SurveyAction.submitQuestion({key:"cons3",value:responses.negative}))
      dispatch(SurveyAction.questionCount3(3));
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
            placeholder="Opinion: e.g., smell, texture, size, packaging, ingredients, hydrating, skin reaction, etc."
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
            placeholder="Opinion: e.g., smell, texture, size, packaging, ingredients, hydrating, skin reaction, etc."
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
