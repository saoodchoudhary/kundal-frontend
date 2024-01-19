
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ProductNameSurvey from './ProductNameSurvey';
import ProsAndConsSurveyAB from './ProsAndConsSurveyAB';
import PreviousProdcutSurveyC from './PreviousProdcutSurveyC';
import PurchaseInformationD from './PurchaseInformationD';
import CostInformationE from './CostInformationE';
import ComparisonSurveyF from './ComparisonSurveyF';
import IngredientAwarenessG from './IngredientAwarenessG';
import WillingnesstoPayH from './WillingnesstoPayH';
import HowManyTimesI from './HowManyTimesI';
import UsageInformationJ from './UsageInformationJ';



const Q1Home = () => {
  // const totalQuestion = useSelector(state => state.survey.formData.maxProduct);
  const {qStep1, qStep2, qStep3} = useSelector(state => state.survey);
  const currentProduct = useSelector(state => state.survey.currentProduct);
  const [qStep, setQStep] =useState(1)
  console.log(qStep+"qstep")

  

  useEffect(() => {
    if (currentProduct === 1) {
      setQStep(qStep1);
    } else if (currentProduct === 2) {
      setQStep(qStep2);
    } else if (currentProduct === 3) {
      setQStep(qStep3);
    }
  }, [currentProduct, qStep1, qStep2, qStep3]);



  return (
    <div className="mx-auto p-4">
      <h1 className=' text-xl sm:text-3xl  font-bold text-gray-800 text-center mt-3'>Q1: Product Evaluation</h1>
      <h2 className=" text:lg sm:text-2xl font-semibold text-center mt-4">Product : {currentProduct}</h2>
      {
        qStep === 1 && <ProductNameSurvey/>        
      }
      {
        qStep === 2 && <ProsAndConsSurveyAB/>        
      }
      {
        qStep === 3 && <PreviousProdcutSurveyC/>        
      }
      {
        qStep === 4 && <PurchaseInformationD/>        
      }
      {
        qStep === 5 && <CostInformationE/>        
      }
      {
        qStep === 6 && <ComparisonSurveyF/>        
      }
      {
        qStep === 7 && <IngredientAwarenessG/>        
      }
      {
        qStep === 8 && <WillingnesstoPayH/>        
      }
      {
        qStep === 9 && <HowManyTimesI/>        
      }
      {
        (qStep === 10 && currentProduct === 1) && <UsageInformationJ/>        
      }

    </div>
  );
};

export default Q1Home;

