import React from 'react'
import { useSelector } from 'react-redux'
import PersonalCareRoutineA from './PersonalCareRoutineA'
import PersonalCareRoutineB from './PersonalCareRoutineB'
import PersonalCareRoutineC from './PersonalCareRoutineC'

const Q2Home = () => {
  const {q2}  = useSelector(state => state.survey)
  return (
    <div>
      <h1 className=' text-xl sm:text-3xl  font-bold text-gray-800 text-center mt-3'>Personal Care Routine</h1>
      {
        q2 === 1 && <PersonalCareRoutineA/>
      }
      {
        q2 === 2 && <PersonalCareRoutineB/>
      }
      {
        q2 === 3 && <PersonalCareRoutineC/>
      }
      
    </div>
  )
}

export default Q2Home
