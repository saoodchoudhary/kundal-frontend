import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SurveyAction } from '../../store/surveySlice';

const AgeSurvey = () => {
    const dispatch = useDispatch();
    const [age, setAge] = useState("")
    const handleOnChange = (e)=>{
        const { value} = e.target;
        setAge(value)
    }

    const data = useSelector(state => state.survey.formData)

    
    useEffect(() => {
        if(data.age){
        setAge(data.age)
        }
    }, [age, data.age])

    const handleNext = (e)=>{
        e.preventDefault();
        dispatch(SurveyAction.submitForm({key:"age",value:age}))
        dispatch(SurveyAction.stepCount(4))
    }


  return (
    <div className="myContainer">
      <form onSubmit={handleNext}>
    <div className='childContainer-1'>
        <h1 className="question">What is Your Age ?</h1>
        <div className='inputContainer'>
            <input
                id='age'
                type="number"
                name="age"
                placeholder='Age'
                value={age}
                onChange={handleOnChange}
                className="input"
                required
            />
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
  )
}

export default AgeSurvey