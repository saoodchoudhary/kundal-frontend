import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const OpinionSurvey = () => {
  const [opinion, setOpinion]= useState("")
  const [myError, setMyError]= useState(false)
  const dispatch = useDispatch();
  const handleChange =(e)=>{
    setOpinion(e.target.value)
  }

  const { currentProduct} = useSelector(state => state.survey);

  const handleNext = ()=>{
    if(opinion.length > 2)
    {
      if(currentProduct ===1){
      dispatch(SurveyAction.submitQuestion({key:"opinion1",value:opinion}))
      dispatch(SurveyAction.questionCount1(3));
    }
    else if(currentProduct === 2){
      dispatch(SurveyAction.submitQuestion({key:"opinion2",value:opinion}))
      dispatch(SurveyAction.questionCount2(3));
    }
    else if(currentProduct === 3) {
      dispatch(SurveyAction.submitQuestion({key:"opinion3",value:opinion}))
      dispatch(SurveyAction.questionCount3(3));
    }
    }else{
      setMyError(true)
    }
    
  }

  return (

    <div className="myContainer">
            <div className='childContainer-1'>
                <h1 className="question">Opinion</h1>
                <div className='inputContainer'>
                <textarea
                
                  name="opinion"
                  onChange={handleChange}
                  rows={8}
                  className=" border rounded w-full py-2 max-w-md px-3 focus:outline-none         focus:border-blue-500"
                  placeholder="e.g., smell, texture, size, packaging, ingredients, hydrating, skin reaction, etc."
        />
                </div>
            </div>
        {myError && <div className='text-red-600 text-center'>Please Enter Opinion</div>}
            <button
                onClick={handleNext}
                className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
                Next Step
            </button>
        </div>

  );
};

export default OpinionSurvey
