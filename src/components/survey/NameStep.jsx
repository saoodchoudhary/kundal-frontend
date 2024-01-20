// Importing necessary modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

import "../../style/survey.css"

// Survey component for the Name step
const NameStep = () => {
    // State to hold the user's name
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Redux dispatch
    const dispatch = useDispatch();
    const data = useSelector(state => state.survey.formData)

    useEffect(() => {
        if(data.name)
        {
            
        setName(data.name)
        }
        if(data.email)
        {
        setEmail(data.email)

        }
        if(data.phone)
        {
        setPhone(data.phone)

        }
    }, [name, email, phone, data.name, data.email, data.phone])
    // Function to handle name input change
    // const handleChange = (e) => {
    //     const {value} = e.target;
    //     setName(value);
    // }

    // Function to handle next button click
    const handleNext = () => {
        // Dispatching actions to submit form data and update step count
        dispatch(SurveyAction.submitForm({ key: 'name', value: name }));
        dispatch(SurveyAction.submitForm({ key: 'email', value: email }));
        dispatch(SurveyAction.submitForm({ key: 'phone', value: phone }));
        dispatch(SurveyAction.stepCount(3));
    }

    return (
        <div className="myContainer">
            <div className='childContainer-1'>
                <h1 className="question">Contact Information</h1>
                <div className='inputContainer flex-col '>
                    <div className='flex flex-col'>
                        <label htmlFor='name'>Name <span className='text-gray-400 text-sm'>( Optional ) :</span></label>
                        <input
                            id='name'
                            type="text"
                            name="name"
                            value={name}
                            placeholder='Name'
                            onChange={(e) => { setName(e.target.value) }}
                            className="rounded-md"
                        />
                    </div>
                    <div className='flex flex-col  mt-3'>
                        <label htmlFor='name'>Email <span className='text-gray-400 text-sm'>( Optional ) :</span></label>
                        <input
                            id='name'
                            type="email"
                            name="email"
                            value={email}
                            placeholder='Email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="rounded-md"
                        />
                    </div>
                    <div className='flex flex-col  mt-3'>
                        <label htmlFor='tel'>Phone <span className='text-gray-400 text-sm'>( Optional ) :</span></label>
                        <input
                            id='tel'
                            type="tel"
                            name="tel"
                            value={phone}
                            placeholder='Phone'
                            onChange={(e) => { setPhone(e.target.value) }}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={handleNext}
                className={`myBtn ${(name === "" && email === "" && phone === "") ? " bg-red-500 hover:bg-red-600 " : " bg-blue-500 hover:bg-blue-600 "}  text-white py-2 rounded-full focus:outline-none`}
            >
                {(name === "" && email === "" && phone === "") ? "Skip Step" : "Next Step"}
            </button>
        </div>
    );
}

export default NameStep;
