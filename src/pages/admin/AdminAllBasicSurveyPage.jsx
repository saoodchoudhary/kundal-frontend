import React, { useEffect, useRef, useState, forwardRef } from 'react'
import Loading from '../../components/Loading';
import { useReactToPrint } from 'react-to-print';

const AdminAllBasicSurveyPage = forwardRef((props, ref) => {
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
            <h2 className="text-2xl font-semibold text-center my-4">All Basic Information Comments</h2>
            <div ref={printComponentRef}  className="previewContainer overflow-x-auto ">
    
                {items && items.map((survey, index) => (
                    <div key={index} style={{ pageBreakAfter: 'always' }} className='bg-white px-5 py-4 rounded-md '>
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


export default AdminAllBasicSurveyPage
