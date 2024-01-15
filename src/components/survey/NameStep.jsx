// Importing necessary modules
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

import "../../style/survey.css"

// Survey component for the Name step
const NameStep = () => {
    // State to hold the user's name
    const [name, setName] = useState('');

    // Redux dispatch
    const dispatch = useDispatch();

    // Function to handle name input change
    const handleChange = (e) => {
        const { value } = e.target;
        setName(value);
    }

    // Function to handle next button click
    const handleNext = () => {
        // Dispatching actions to submit form data and update step count
        dispatch(SurveyAction.submitForm({ key: 'name', value: name }));
        dispatch(SurveyAction.stepCount(3));
    }

    return (
        <div className="myContainer">
            <div className='childContainer-1'>
                <h1 className="question">What is Your Name ?</h1>
                <div className='inputContainer'>
                    <input
                        id='name'
                        type="text"
                        name="name"
                        value={name}
                        placeholder='Name'
                        onChange={handleChange}
                        className="input"
                    />
                </div>
            </div>
            <button
                onClick={handleNext}
                className="myBtn bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
                Next Step
            </button>
        </div>
    );
}

export default NameStep;
