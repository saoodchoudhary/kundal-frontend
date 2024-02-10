import React, { useEffect, useRef, useState,forwardRef } from 'react'
import Loading from '../../components/Loading';
import { useReactToPrint } from 'react-to-print';

const GetAllSurveyCommentsPage = forwardRef((props,ref) =>{
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
    }, [isLoading]);
  
    if (isLoading) {
      return <Loading />
    }
    return (
      <div>
        <div className='flex justify-end px-5 mt-4'>
         <button className='bg-green-600 text-white py-1 px-4 rounded-md ' onClick={handlePrint}>Print</button>
        </div>
      <div ref={printComponentRef}>
        <h2 className="text-2xl font-semibold text-center my-5">All Survey Comments </h2>
        <div className="previewContainer overflow-x-auto">
  
          {items && items.map((survey, _) => (
            <div style={{ pageBreakAfter: 'always' }} key={_} className='bg-white px-3 py-4 rounded-md'>
           <table  className='w-full border-collapse border my-3'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Product Name</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.productName1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Pros</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.pros1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>cons</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cons1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>What were you using before {survey.productName1}?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.previousProduct_c1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Where did You Purchase it from?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.purchaseInformation1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Price</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cost1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Is {survey.productName1} a better replacement for your current Product?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.comparisonSurvey1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Have You read the ingredients of {survey.productName1}?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.ingredientAwarness1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>How much would you be willing to pay for {survey.productName1}?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.willingnesstoPay1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>How many times you used {survey.productName1} since you received it?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.howManyTimes1}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Have you seen a difference after using {survey.productName1} to your hair or skin?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.usageInformation1}</td>
                                        </tr>
                                    </tbody>
                                </table>
              {survey.maxProduct > 1 &&
  <div   style={{ pageBreakBefore: 'always'}} className='py-5'>
  <table className='w-full py-5 border-collapse border my-3'>
     <thead>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Product Name</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.productName2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Pros</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.pros2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>cons</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cons2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>What were you using before {survey.productName2}?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.previousProduct_c2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Where did You Purchase it from?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.purchaseInformation2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Price</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cost2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Is {survey.productName2} a better replacement for your current Product?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.comparisonSurvey2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>Have You read the ingredients of {survey.productName2}?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.ingredientAwarness2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>How much would you be willing to pay for {survey.productName2}?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.willingnesstoPay2}</td>
       </tr>
       <tr>
           <th className='border border-gray-400 px-4 py-2 w-1/2'>How many times you used {survey.productName2} since you received it?</th>
           <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.howManyTimes2}</td>
       </tr>
   </tbody>
</table>
</div>
              
}

{survey.maxProduct > 2 &&
<div   style={{ pageBreakBefore: 'always'}} className='py-5'>
           <table className='w-full py-5 border-collapse border my-3'>
           <thead>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Product Name</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.productName3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Pros</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.pros3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>cons</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cons3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>What were you using before {survey.productName3}?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.previousProduct_c3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Where did You Purchase it from?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.purchaseInformation3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Price</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.cost3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Is {survey.productName3} a better replacement for your current Product?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.comparisonSurvey3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>Have You read the ingredients of {survey.productName3}?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.ingredientAwarness3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>How much would you be willing to pay for {survey.productName3}?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.willingnesstoPay3}</td>
               </tr>
               <tr>
                   <th className='border border-gray-400 px-4 py-2 w-1/2'>How many times you used {survey.productName3} since you received it?</th>
                   <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.howManyTimes3}</td>
               </tr>
           </tbody>
       </table>
       </div>
}
            </div>
          ))}
        </div>
      </div>
      </div>
    )
  })

  export default GetAllSurveyCommentsPage
  