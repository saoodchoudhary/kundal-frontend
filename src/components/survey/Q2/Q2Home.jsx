import React from 'react'
import { useSelector } from 'react-redux'
import PersonalCareRoutineA from './PersonalCareRoutineA'
import PersonalCareRoutineB from './PersonalCareRoutineB'
import PersonalCareRoutineC from './PersonalCareRoutineC'

const Q2Home = () => {
  const {q2}  = useSelector(state => state.survey)
  return (
    <div>
      <h2>Q2 Personal Care Routine</h2>
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
