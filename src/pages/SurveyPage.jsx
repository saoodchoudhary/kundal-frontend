import React, {  } from 'react'
import Welcome from '../components/survey/Welcome'
import { useSelector } from 'react-redux'
import NameStep from '../components/survey/NameStep'
import AgeSurvey from '../components/survey/AgeSurvey'
import HairKind from '../components/survey/HairKind'
import MaximumChooseProduct from '../components/survey/MaximumChooseProduct'
import Q1Home from '../components/survey/Q1/Q1Home'
import Q2Home from '../components/survey/Q2/Q2Home'
import SurveySuccess from './SurveySuccess'
import Allergies from '../components/survey/Allergies'
import ExtraFeedbackSurvey from '../components/survey/ExtraFeedbackSurvey'

import "../style/surveywelcom.css"
const SurveyPage = () => {
    const { step, navCount, currentProduct, qStep1, qStep2, qStep3 , q2} = useSelector(state => state.survey);

   console.log("cou"+typeof(currentProduct))
   const navArray = [];
   
    for (let index = 0; index < navCount; index++) {
        navArray.push(index+1)
    }

    const navProgress = (val, key) => {
        console.log(val, key)
        let nStep = step;
        if(step > 5){
            nStep  =  6
        }
        
        if (val === 1) {
            return ((nStep - 1) / 5) * 100 / navCount ;
        } else if (val === 2) {
            return ((qStep1 - 1) / 11) * 100 / navCount;
        } else if ((val === 3) ) {
            return ((qStep2 - 1) / 10) * 100 / navCount;
        } else if ( (val === 4)) {
            return ((qStep3 - 1) / 10) * 100 / navCount;
        }else if((val === 5)){
            return ((q2 -1)/3) * 100 / navCount
        }
    
        return 0; // Default value if none of the conditions match
    };
    
//    useEffect(()=>{
//     for (let index = 0; index < navCount; index++) {
//         navArray.push(index+1)
//     }
//    },[navCount]);
  return (
    <div>
    <div className='img-container'>
            <img src={process.env.PUBLIC_URL + '/survey/bodyw.png'} alt="Shampoo" className="img1" />
            <img src={process.env.PUBLIC_URL + '/survey/shampoo.png'} alt="Shampoo" className="img2" />
            <img src={process.env.PUBLIC_URL + '/survey/bodyl.png'} alt="Shampoo" className="img3" />
            <img src={process.env.PUBLIC_URL + '/survey/treatment.png'} alt="Shampoo" className="img4" />
      </div>
    <div className='p-5'>
        <div className='progress-relative'>
        <div className='flex '>
        { navArray.map((val,_)=>{
            return(
            <div key={_} className={`bg-gray-200 rounded-full h-2 w-[100%]`}></div>
            )
        }) }
            <div className='flex absolute top-0 left-0  w-[100%]'>
        { navArray.map((val,_)=>{
            console.log(val)
            return(
            <div key={_} className={`bg-blue-500 rounded-full h-2`} style={{width:`${navProgress(val, _)}%`}} ></div>
            )
        }) }
            </div>
            </div>
            </div>
        {
            step === 1 &&  <Welcome/>
        }
        {
            step === 2 &&  <NameStep/>
        }
        { 
            step === 3 && <AgeSurvey/>
        }
        { 
            step === 4 && <HairKind/>
        }
        { 
            step === 5 && <MaximumChooseProduct/>
        }
        { 
            step === 6 && <Q1Home/>
        }
        { 
            step === 7 && <Q2Home/>
        }
        { 
            step === 8 && <Allergies/>
        }   
        { 
            step === 9 && <ExtraFeedbackSurvey/>
        }  
        { 
            step === 10 && <SurveySuccess/>
        }   
    </div>
    </div>
  )
}

export default SurveyPage
