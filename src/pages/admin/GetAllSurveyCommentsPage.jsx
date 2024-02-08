import React, { useEffect, useRef, useState,forwardRef } from 'react'
import Loading from '../../components/Loading';
import {  useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const GetAllSurveyCommentsPage = forwardRef((props,ref) =>{
    const { id } = useParams();
    const [items, setItems] = useState()
    const [isLoading, setIsLoading] = useState(true);
  
    const printComponentRef = useRef();
    const handlePrint = useReactToPrint({
      
      content: () => printComponentRef.current,
    });
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/survey/getAllSurvey`);
  
        const data = await res.json();
        console.log(data)
        setItems(data)
        setIsLoading(false)
  
      };
  
      fetchData();
    }, [isLoading, id]);
  
    if (isLoading) {
      return <Loading />
    }
    return (
      <div>
        <div className='flex justify-end px-5 '>
         <button className='bg-green-600 text-white py-1 px-4 rounded-md ' onClick={handlePrint}>Print</button>
        </div>
      <div ref={printComponentRef}>
        <h2 className="text-2xl font-semibold text-center my-5">All Survey Comments </h2>
        <div className="previewContainer overflow-x-auto">
  
          {items && items.map((survey, _) => (
            <div key={_} className='bg-white px-3 py-4 rounded-md'>
         <ul className='my-4'>
                <li><strong>Product Name:</strong> {survey.productName1}</li>
                <li><strong>Pros:</strong> {survey.pros1}</li>
                <li><strong>cons:</strong> {survey.cons1}</li>
                <li><strong>What were you using before {survey.productName1}?</strong> {survey.previousProduct_c1}</li>
                <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation1}</li>
                <li><strong>Price :</strong> {survey.cost1}</li>
                <li><strong>Is {survey.productName1} a better replacement for your current Product?</strong> {survey.comparisonSurvey1}</li>
                <li><strong>Have You read the ingredients of {survey.productName1}?</strong> {survey.ingredientAwarness1}</li>
                <li><strong>How much would you be willing to pay for {survey.productName1}?</strong> {survey.willingnesstoPay1}</li>
                <li><strong>How many times you used {survey.productName1} since you received it?</strong> {survey.howManyTimes1}</li>
                <li><strong>Have you seen a difference after using {survey.productName1} to your hair or skin?</strong> {survey.usageInformation1}</li>
              </ul>
              {survey.maxProduct > 1 &&
 <ul className='my-4'>
                <li><strong>Product Name:</strong> {survey.productName2}</li>
                <li><strong>Pros:</strong> {survey.pros2}</li>
                <li><strong>cons:</strong> {survey.cons2}</li>
                <li><strong>What were you using before {survey.productName2}?</strong> {survey.previousProduct_c2}</li>
                <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation2}</li>
                <li><strong>Price :</strong> {survey.cost2}</li>
                <li><strong>Is {survey.productName2} a better replacement for your current Product?</strong> {survey.comparisonSurvey2}</li>
                <li><strong>Have You read the ingredients of {survey.productName2}?</strong> {survey.ingredientAwarness2}</li>
                <li><strong>How much would you be willing to pay for {survey.productName2}?</strong> {survey.willingnesstoPay2}</li>
                <li><strong>How many times you used {survey.productName2} since you received it?</strong> {survey.howManyTimes2}</li>
              </ul>
              
}

{survey.maxProduct > 2 &&
              <ul className='my-4'>
                <li><strong>Product Name:</strong> {survey.productName3}</li>
                <li><strong>Pros:</strong> {survey.pros3}</li>
                <li><strong>cons:</strong> {survey.cons3}</li>
                <li><strong>What were you using before {survey.productName3}?</strong> {survey.previousProduct_c3}</li>
                <li><strong>Where did You Purchase it from?</strong> {survey.purchaseInformation3}</li>
                <li><strong>Price :</strong> {survey.cost3}</li>
                <li><strong>Is {survey.productName3} a better replacement for your current Product?</strong> {survey.comparisonSurvey3}</li>
                <li><strong>Have You read the ingredients of {survey.productName3}?</strong> {survey.ingredientAwarness3}</li>
                <li><strong>How much would you be willing to pay for {survey.productName3}?</strong> {survey.willingnesstoPay3}</li>
                <li><strong>How many times you used {survey.productName3} since you received it?</strong> {survey.howManyTimes3}</li>
              </ul>
}
            </div>
          ))}
        </div>
      </div>
      </div>
    )
  })

  export default GetAllSurveyCommentsPage
  