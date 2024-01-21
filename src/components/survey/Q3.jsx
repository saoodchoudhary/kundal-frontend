import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SurveyAction } from '../../store/surveySlice';

const Q3 = () => {
    const [source, setSource] = useState('');
    const data = useSelector(state => state.survey.formData)
    const dispatch= useDispatch();

  useEffect(()=>{
      setSource(data.q2)
  },[data.q2])

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(SurveyAction.stepCount(11));
      dispatch(SurveyAction.submitForm({key:"q2",value:source}))
    };
  
  return (
    <div>
    <h1 className=' text-xl sm:text-3xl  font-bold text-gray-800 text-center mt-3'>Product Preference*</h1>
    <div className="myContainer">
      <form onSubmit={handleSubmit}>
    <div className='childContainer-1'>
        <h1 className="question">If Kundal offered only 5 products (see website <a className=' text-blue-600 underline' rel="noreferrer" href='https://kundal.us/' target='_blank'>[https://kundal.us]</a> ) which ones would you choose?</h1>
        <div className='inputContainer'>
            <textarea
                id='name'
                name="name"
                rows={6}
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border rounded w-full py-2 max-w-md px-3"
                required
            />
        </div>
    </div>
    <div className="mb-4 max-w-lg mx-auto">
        <p className="text-sm text-gray-600 text-center">
          By completing this survey, you acknowledge and agree to keep all provided information confidential.
          You commit not to disclose any details about Kundal to any third party.
          Additionally, you agree to compensate Etihad Medical Company and indemnify them against any breach of confidentiality.
        </p>
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
  )
}

export default Q3
