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
                    <div key={index} style={{ pageBreakAfter: 'always' }} className='bg-white px-5 py-4 rounded-md  h-[100vh]'>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold my-2">Personal Information</h3>
                            <ul>
                                <li><strong>Name:</strong> {(survey.name === "") ? "Unknown" : survey.name}</li>
                                <li><strong>Email:</strong> {survey.email}</li>
                                <li><strong>Phone:</strong> {survey.phone}</li>
                                <li><strong>Age:</strong> {survey.age}</li>
                                <li><strong>Hair Kind:</strong> {survey.hairKind}</li>
                                <li><strong>How Many Products did You Receive?</strong> {survey.maxProduct}</li>
                            </ul>
                        </div>
    
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold my-2">Personal Care Routine</h3>
                            <ul>
                                <li><strong>Your personal care routine:</strong> {survey.personalCareRoutineA}</li>
                                <li><strong>Where do you buy personal care products?</strong> {survey.personalCareRoutineB}</li>
                                <li><strong>Hair care routine:</strong> {survey.personalCareRoutineC}</li>
                            </ul>
                        </div>
    
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold my-2">Product Preference</h3>
                            <ul>
                                <li><strong>Product Preference:</strong> {survey.q2}</li>
                            </ul>
                        </div>
    
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold my-2">Additional Information</h3>
                            <ul>
                                <li><strong>Allergies:</strong> {survey.allergies}</li>
                                <li><strong>Extra Feedback:</strong> {survey.extraFeedback}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
    )
})


export default AdminAllBasicSurveyPage
