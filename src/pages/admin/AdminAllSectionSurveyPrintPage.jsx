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
                                <ul>
                                    <li><strong>Name:</strong> {(survey.name === "") ? "Unknown" : survey.name}</li>
                                    <li><strong>Email:</strong> {survey.email}</li>
                                    <li><strong>Phone:</strong> {survey.phone}</li>
                                    <li><strong>Age:</strong> {survey.age}</li>
                                    <li><strong>Hair Kind:</strong> {survey.hairKind}</li>
                                    <li><strong>How Many Products did You Receive?</strong> {survey.maxProduct}</li>
                                </ul>
                            </div>
                            <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
                                <h2 className="text-lg font-bold mb-2">Product 1 Information:</h2>
                                <ul>
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
                            </div>

                            {/* Product 2 Information Section */}
                            {survey.maxProduct > 1 &&
                                <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
                                    <h2 className="text-lg font-bold mb-2">Product 2 Information:</h2>
                                    <ul>
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
                                </div>
                            }

                            {/* Product 3 Information Section */}
                            {survey.maxProduct > 2 &&
                                <div className="section-box border-t border-b border-gray-300 my-4 py-2 bg-white px-1">
                                    <h2 className="text-lg font-bold mb-2">Product 3 Information:</h2>
                                    <ul>

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
                                </div>
                            }
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

                            <div className="mb-[120px]">
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


export default AdminAllSectionSurveyPrintPage
