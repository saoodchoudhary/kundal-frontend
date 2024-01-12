import React, { useEffect, useState } from 'react'
import "../style/surveyform.css"
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';


const SurveyFormPage = () => {

  const { id } = useParams();
  const [item, setItem] = useState({ title: "" })
  const [isLoading, setIsLoading] = useState(true)
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    window.scroll(0, 0)
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    window.scroll(0, 0)
    setStep((prevStep) => prevStep - 1);
  };

  const calculateProgress = (stepNumber) => {
    return ((stepNumber - 1) / 5) * 100; // Assuming 3 steps in total
  };
  const [formData, setFormData] = useState({
    // step 1..
    productName: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
    g: '',
    h: '',
    i: '',
    j: '',

    // ... step 2..
    preference: '',

    // setp 3...
    routine_a: '',
    routine_b: '',
    routine_c: '',

    //step 4...
    allergies: '',

    //step 5..
    extraFeedback: '',
    name: '',
    contact: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const submitSurvey = async (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data
    navigate("/survey/success")

    const res = await fetch(`${process.env.REACT_APP_API_URL}/survey/add`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(() => {
    }).catch((err) => {
      console.log(err)
    }).then(() => {
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`);
      const data = await res.json();
      setItem(data)
      setFormData({ ...formData, "productName": data.title });
      setIsLoading(false)
    }

    fetchData();
  }, [id, isLoading, item.title])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1>Survey: Personal Care Product Feedback</h1>
      <div className="mb-4">
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${calculateProgress(step)}%` }}
          ></div>
        </div>
        <div className="text-right mt-2 text-sm font-semibold">
          {calculateProgress(step)}% Complete
        </div>
      </div>
      <div className="border rounded-md p-4">
        {step === 1 && (
          <div>
            {/* Step 1 Content */}
            <div>
              <div className='font-semibold'>Q1:- Product Evaluation</div>
              <p className='text-gray-600'>Opinion: e.g., smell, texture, size, packaging, ingredients, hydrating, skin reaction, etc.</p>
              <div className="mb-4">
                <label className="block mb-1">Product Name : {item.title}</label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
                <label className="block mb-1">Pros:</label>
                <textarea
                  type="text"
                  name="a"
                  value={formData.a}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
                <label className="block mb-1">Cons:</label>
                <textarea
                  type="text"
                  name="b"
                  value={formData.b}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
                <label className="block mb-1">What were you using before Kundal?</label>
                <input
                  type="text"
                  name="c"
                  value={formData.c}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-1">Where did you purchase it?</label>
                <input
                  type="text"
                  name="d"
                  value={formData.d}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-1">Cost:</label>
                <input
                  type="text"
                  name="e"
                  value={formData.e}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-1">Is Kundal a better replacement for your current product?</label>
                <input
                  type="text"
                  name="f"
                  value={formData.f}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-1">Have you read the ingredients of Kundal products?</label>
                <select
                  name="g"
                  value={formData.g}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>


              <label className="block mb-1">How much would you be willing to pay for Kundal?</label>
              <input
                type="text"
                name="h"
                value={formData.h}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />


              <label className="block mb-1">How many times have you used Kundal products since you received them?</label>
              <input
                type="text"
                name="i"
                value={formData.i}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />


              <label className="block mb-1">have you seen a difference after using our Kundal hair/skin products?</label>
              <input
                type="text"
                name="j"
                value={formData.j}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Your form elements for Step 1 */}
            <div className='my-btn-container'>
              <div></div>
              <button className='next-btn' onClick={nextStep}>Next</button>
            </div>
          </div>
        )}


        {step === 2 && (
          <div>
            {/* Step 2 Content */}


            <div className="my-4">
              <div className='font-semibold'>Q2:- Product Preference</div>
              <p className='text-gray-600'>If Kundal offered only 5 products (see website [kundal.us](http://kundal.us)), which ones would you choose?</p>
              <textarea
                rows={5}
                type="text"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Your form elements for Step 2 */}
            <div className='my-btn-container'>
              <button className='back-btn' onClick={prevStep}>Back</button>
              <button className='next-btn' onClick={nextStep}>Next</button>
            </div>
          </div>
        )}


        {step === 3 && (
          <div>

            {/* Step 3 Content */}


            <div className="my-4">
              <div className='font-semibold'>Q3: Personal Care Routine</div>
              <p className='text-gray-600'>What is your personal care routine? (For example Shampoo, body scrub, body mist. Hair spray)</p>
              <label className="block mb-1">Please share the list of products that you use</label>
              <input
                type="text"
                name="routine_a"
                value={formData.routine_a}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />
            </div>

            <label className="block mb-1">From where do you buy your personal care products?</label>
            <input
              type="text"
              name="routine_b"
              value={formData.routine_b}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            />

            <label className="block mb-1">What is your hair care routine?</label>
            <input
              type="text"
              name="routine_c"
              value={formData.routine_c}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
            />

            {/* Your form elements for Step 3 */}
            <div className='my-btn-container'>
              <button className='back-btn' onClick={prevStep}>Back</button>
              <button className='next-btn' onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            {/* Step 4 Content */}
            <div className="mb-4">
              <div className='font-semibold'>Q4: Allergies</div>
              <label className="block mb-1">Do you have any allergies?</label>
              <textarea
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Your form elements for Step 4 */}
            <div className='my-btn-container'>
              <button className='back-btn' onClick={prevStep}>Back</button>
              <button className='next-btn' onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            {/* Step 5 Content */}
            <div>
              <div className='font-semibold'>Q5: Additional Comments</div>
              <div className="mb-4">
                <label className="block mb-1">Any extra feedback or comments?</label>
                <textarea
                  type="text"
                  name="extraFeedback"
                  value={formData.extraFeedback}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />

                <label className="block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
                <label className="block mb-1">Contact Info:</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder='Name or Email or WhatsApp'
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
                <label className="block mb-1">email:</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            {/* Your form elements for Step 5 */}
            <div className='my-btn-container'>
              <button className='back-btn' onClick={prevStep}>Back</button>
              <button className='next-btn' onClick={submitSurvey}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default SurveyFormPage
