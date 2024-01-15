
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import ProductNameSurvey from './ProductNameSurvey';
import OpinionSurvey from './OpinionSurvey';
import ProsAndConsSurvey_AB from './ProsAndConsSurvey_AB';
import PreviousProdcutSurvey_C from './PreviousProdcutSurvey_C';
import PurchaseInformation_D from './PurchaseInformation_D';
import CostInformation_E from './CostInformation_E';
import ComparisonSurvey_F from './ComparisonSurvey_F';
import IngredientAwareness_G from './IngredientAwareness_G';
import WillingnesstoPay_H from './WillingnesstoPay_H';
import HowManyTimes_I from './HowManyTimes_I';
import UsageInformation_J from './UsageInformation_J';


const Q1Home = () => {
  const totalQuestion = useSelector(state => state.survey.formData.maxProduct);
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
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Product : {currentProduct}</h2>
      {
        qStep === 1 && <ProductNameSurvey/>        
      }
      {
        qStep === 2 && <OpinionSurvey/>        
      }
      {
        qStep === 3 && <ProsAndConsSurvey_AB/>        
      }
      {
        qStep === 4 && <PreviousProdcutSurvey_C/>        
      }
      {
        qStep === 5 && <PurchaseInformation_D/>        
      }
      {
        qStep === 6 && <CostInformation_E/>        
      }
      {
        qStep === 7 && <ComparisonSurvey_F/>        
      }
      {
        qStep === 8 && <IngredientAwareness_G/>        
      }
      {
        qStep === 9 && <WillingnesstoPay_H/>        
      }
      {
        qStep === 10 && <HowManyTimes_I/>        
      }
      {
        (qStep === 11 && currentProduct === 1) && <UsageInformation_J/>        
      }

    </div>
  );
};

export default Q1Home;

