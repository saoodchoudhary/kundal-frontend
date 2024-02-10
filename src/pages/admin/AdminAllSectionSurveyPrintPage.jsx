import React, { useEffect, useRef, useState, forwardRef } from 'react'
import Loading from '../../components/Loading';
import { useReactToPrint } from 'react-to-print';

const AdminAllSectionSurveyPrintPage = forwardRef((props, ref) => {
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
            <div className='flex justify-end px-5 my-3'>
                <button className='bg-green-600 text-white py-1 px-4 rounded-md ' onClick={handlePrint}>Print</button>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-center my-4">All Sections Survey</h2>
                <div ref={printComponentRef} className="previewContainer overflow-x-auto ">

                    {items && items.map((survey, index) => (
                        <div key={index} style={{ pageBreakAfter: 'always' }} className='bg-white px-5 py-2 rounded-md  '>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold my-2">Personal Information</h3>
                                <table className='w-full border-collapse border'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Name</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{(survey.name === "") ? "Unknown" : survey.name}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Email</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.email}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Phone</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.phone}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Age</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.age}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Hair Kind</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.hairKind}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>How Many Products did You Receive?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.maxProduct}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="section-box my-4 py-2 bg-white px-1">
                                <h2 className="text-lg font-bold mb-2">Product 1 Information:</h2>

                                <table className='w-full border-collapse border'>
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
                                
                              
                            </div>

                            {/* Product 2 Information Section */}
                            {survey.maxProduct > 1 &&
                                <div className="section-box  my-4 py-2 bg-white px-1">
                                    <h2 className="text-lg font-bold mb-2">Product 2 Information:</h2>
                                    <table className='w-full border-collapse border'>
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

                            {/* Product 3 Information Section */}
                            {survey.maxProduct > 2 &&
                                <div className="section-box my-4 py-2 bg-white px-1">
                                    <h2 className="text-lg font-bold mb-2">Product 3 Information:</h2>
                                    <table className='w-full border-collapse border'>
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
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold my-2">Personal Care Routine</h3>
                                <table className='w-full border-collapse border'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Your personal care routine</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.personalCareRoutineA}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Where do you buy personal care products?</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.personalCareRoutineB}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Hair care routine</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.personalCareRoutineC}</td>
                                        </tr>
                                       
                                       
                                    </tbody>
                                </table>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold my-2">Product Preference</h3>
                                <table className='w-full border-collapse border'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Product Preference</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.q2}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mb-[120px]">
                                <h3 className="text-lg font-semibold my-2">Additional Information</h3>
                                <table className='w-full border-collapse border'>
                                    <thead>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Field</th>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Allergies</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.allergies}</td>
                                        </tr>
                                        <tr>
                                            <th className='border border-gray-400 px-4 py-2 w-1/2'>Extra Feedback</th>
                                            <td className='border border-gray-400 px-4 py-2 w-1/2'>{survey.extraFeedback}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
})


export default AdminAllSectionSurveyPrintPage
