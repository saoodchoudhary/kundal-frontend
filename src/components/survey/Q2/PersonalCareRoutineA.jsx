// PersonalCareRoutine.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../../store/surveySlice';

const PersonalCareRoutineA = () => {
  const dispatch= useDispatch();
  const [items, setItems] = useState([]);

  const handleNext = (val) => {
    // Ensure that items is always initialized as an array
    setItems((prevItems) => {
      const updatedItems = prevItems ? [...prevItems] : [];
      if (updatedItems.includes(val)) {
        return updatedItems.filter((item) => item !== val);
      } else {
        return [...updatedItems, val];
      }
    });
  };

  const hanldeSubmit = (e)=>{
    e.preventDefault();
      dispatch(SurveyAction.q2Count(2));
      dispatch(SurveyAction.submitForm({key:"personalCareRoutineA",value:items}))

  }
  return (

    <div className="myContainer">
    <div className='childContainer-1'>
      <h1 className="question">What is your personal care routine?</h1>
<form onSubmit={hanldeSubmit}>
  
      <div className='checkedBtnImgContainer'>
        <div className='checkBtnImg'>
          <label  className='checkBtnLabel'>
            <img src='./survey/shampoo.png' alt='shampoo'/>
            <div>Shampoo</div>
          </label>
          <input onClick={() => handleNext("Shampoo")} type='checkbox' id='shampoo' name='Shampoo'/>
        </div>

        <div className='checkBtnImg'>
          <label className='checkBtnLabel'>
            <img src='./survey/bodys.png' alt='body scrub'/>
            <div>Body Scrub</div>
          </label>
          <input onClick={() => handleNext("Body Scrub")} type='checkbox' id='BodyScrub' name='Shampoo'/>
        </div>

        <div className='checkBtnImg' >
          <label className='checkBtnLabel'>
            <img src='./survey/bodymist.png' alt='Body Mist'/>
            <div>Body Mist</div>
          </label>
          <input type='checkbox'  onClick={() => handleNext("Body Mist")}  id='BodyMist' name='BodyMist'/>
        </div>


        <div className='checkBtnImg'>
          <label className='checkBtnLabel'>
            <img src='./survey/bodyw.png' alt='body wash'/>
            <div>Body Wash</div>
          </label>
          <input onClick={() => handleNext("Body Wash")} type='checkbox' id='BodyWash' name='BodyWash'/>
        </div>


        <div className='checkBtnImg'>
          <label className='checkBtnLabel'>
            <img src='./survey/hair.png' alt='Hair'/>
            <div>Hair Spray</div>
          </label>
          <input onClick={() => handleNext("Hair Spray")} type='checkbox' id='HairSpray' name='HairSpray'/>
        </div>


        <div className='checkBtnImg'>
          <label  className='checkBtnLabel'>
            <img src='./survey/bodyl.png' alt='body lotion'/>
            <div>Body Lotion</div>
          </label>
          <input onClick={() => handleNext("Body Lotion")} type='checkbox' id='BodyLotion' name='BodyLotion'/>
        </div>


        <div className='checkBtnImg'>
          <label  className='checkBtnLabel'>
            <img src='./survey/treatment.png' alt='treatment'/>
            <div>Treatment</div>
          </label>
          <input onClick={() => handleNext("Treatment")} type='checkbox' id='Treatment' name='Treatment'/>
        </div>


        <div className='checkBtnImg'>
          <label className='checkBtnLabel'>
            <img src='./survey/scalp.png' alt='scalp'/>
            <div>Scalp Tonic</div>
          </label>
          <input onClick={() => handleNext("Scalp Tonic")} type='checkbox' id='ScalpTonic' name='ScalpTonic'/>
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
  </div>

  );
};


export default PersonalCareRoutineA
