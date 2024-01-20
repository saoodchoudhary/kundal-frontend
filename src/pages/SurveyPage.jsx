import React, { } from 'react'
import Welcome from '../components/survey/Welcome'
import { useDispatch, useSelector } from 'react-redux'
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
import Q3 from '../components/survey/Q3'
import SurveyPreview from '../components/survey/SurveyPreview'
import { SurveyAction } from '../store/surveySlice'
const SurveyPage = () => {
    // const { step, navCount, currentProduct, qStep1, qStep2, qStep3, q2 } = useSelector(state => state.survey);
    const { step, formData, qStep1, currentProduct, qStep2, qStep3, q2 } = useSelector(state => state.survey);
    const dispatch = useDispatch();

    const handleBackBtn = () => {
        console.log("handleback qstep1: " + qStep1)
        console.log("handleback step: " + step)
        if (formData.maxProduct ) {
            if (step === 8) {
                if (formData.maxProduct === 1) {
                    if (q2 === 1) {
                        dispatch(SurveyAction.currentProductCount(1))
                        dispatch(SurveyAction.questionCount1(10));
                        dispatch(SurveyAction.stepCount(7))
                    } else {
                        dispatch(SurveyAction.q2Count(q2 - 1))
                    }
                } else if (formData.maxProduct === 2) {
                    if (q2 === 1) {
                        dispatch(SurveyAction.currentProductCount(2))
                        dispatch(SurveyAction.questionCount2(9));
                        dispatch(SurveyAction.stepCount(7))
                    } else {
                        dispatch(SurveyAction.q2Count(q2 - 1))
                    }

                } else {
                    if (q2 === 1) {
                        dispatch(SurveyAction.currentProductCount(3))
                        dispatch(SurveyAction.questionCount3(9));
                        dispatch(SurveyAction.stepCount(7))
                    } else {
                        dispatch(SurveyAction.q2Count(q2 - 1))
                    }
                }
            }
            else if (step < 7 || step > 8) {
                if(step !== 1)
                {
                dispatch(SurveyAction.stepCount(step - 1));
                }
            }
            else {
                if (step === 7) {

                    if (formData.maxProduct === 1) {
                        if (qStep1 === 1) {
                            dispatch(SurveyAction.stepCount(6))
                        } else {
                            dispatch(SurveyAction.questionCount1(qStep1 - 1))
                        }
                    } else if (formData.maxProduct === 2) {
                        if (currentProduct === 1) {
                            if (qStep1 === 1) {
                                dispatch(SurveyAction.stepCount(6))
                            } else {
                                dispatch(SurveyAction.questionCount1(qStep1 - 1))
                            }
                        } else if (currentProduct === 2) {
                            if (qStep2 === 1) {
                                dispatch(SurveyAction.currentProductCount(1));
                                dispatch(SurveyAction.questionCount1(10))
                            } else {
                                dispatch(SurveyAction.questionCount2(qStep2 - 1))
                            }
                        }



                    } else if (formData.maxProduct === 3) {
                        if (currentProduct === 1) {
                            if (qStep1 === 1) {
                                dispatch(SurveyAction.stepCount(6))
                            } else {
                                dispatch(SurveyAction.questionCount1(qStep1 - 1))
                            }
                        } else if (currentProduct === 2) {
                            if (qStep2 === 1) {
                                dispatch(SurveyAction.currentProductCount(1));
                                dispatch(SurveyAction.questionCount1(10))
                            } else {
                                dispatch(SurveyAction.questionCount2(qStep2 - 1))
                            }
                        } else if (currentProduct === 3) {
                            if (qStep3 === 1) {
                                dispatch(SurveyAction.currentProductCount(2))
                                dispatch(SurveyAction.questionCount2(9))
                            } else {
                                dispatch(SurveyAction.questionCount3(qStep3 - 1))
                            }
                        }

                    }

                }
            }

            // for (let i = 1; i <= formData.maxProduct ; i++)
            // {
            //     if(formData.maxProduct === 1)

            // }



        } else {
            if (step !== 1) {
                dispatch(SurveyAction.stepCount(step - 1))
            }
        }
    }

    // console.log("cou" + typeof (currentProduct))
    // const navArray = [];

    // for (let index = 0; index < navCount; index++) {
    //     navArray.push(index + 1)
    // }

    // const navProgress = (val, key) => {
    //     console.log(val, key)
    //     let nStep = step;
    //     if (step > 5) {
    //         nStep = 6
    //     }

    //     if (val === 1) {
    //         return ((nStep - 1) / 5) * 100 / navCount;
    //     } else if (val === 2) {
    //         return ((qStep1 - 1) / 11) * 100 / navCount;
    //     } else if ((val === 3)) {
    //         return ((qStep2 - 1) / 10) * 100 / navCount;
    //     } else if ((val === 4)) {
    //         return ((qStep3 - 1) / 10) * 100 / navCount;
    //     } else if ((val === 5)) {
    //         return ((q2 - 1) / 3) * 100 / navCount
    //     }

    //     return 0; // Default value if none of the conditions match
    // };

    // useEffect(() => {
    //     for (let index = 0; index < navCount; index++) {
    //         navArray.push(index + 1)
    //     }
    // }, [navCount]);
    return (
        <div>
            <div className='fixed top-0 left-0 w-full bg-white z-50 shadow-sm p-2 py-4'>
                <img
                    onClick={() => { handleBackBtn() }}
                    src="./backBtn.svg"
                    className='w-6 h-6 ml-4' alt="fd" />
            </div>

            <div className='img-container'>
                <img src='./survey/bodyw.png' alt="Shampoo" className="img1" />
                <img src='./survey/shampoo.png' alt="Shampoo" className="img2" />
                <img src='./survey/bodyl.png' alt="Shampoo" className="img3" />
                <img src='./survey/treatment.png' alt="Shampoo" className="img4" />
            </div>
            <div className='p-5 mt-9'>
                {/* <div className='relative'>
                    <div className='flex'>
                        {navArray.map((val, _) => {
                            return (
                                <div key={_} className={`bg-gray-200 rounded-full h-2 w-[100%]`}></div>
                            )
                        })}
                        <div className='flex absolute top-0 left-0 w-[100%]'>
                            {navArray.map((val, _) => {
                                console.log(val)
                                return (
                                    <div key={_} className={`bg-blue-500 rounded-full h-2`} style={{ width: `${navProgress(val, _)}%` }} ></div>
                                )
                            })}
                        </div>
                    </div>
                </div> */}
                {
                    step === 1 && <Welcome />
                }
                {
                    step === 2 && <NameStep />
                }
                {
                    step === 3 && <AgeSurvey />
                }
                {
                    step === 4 && <HairKind />
                }
                {
                    step === 5 && <MaximumChooseProduct />
                }
                {
                    step === 6 && <Q3 />
                }
                {
                    step === 7 && <Q1Home />
                }
                {
                    step === 8 && <Q2Home />
                }
                {
                    step === 9 && <Allergies />
                }
                {
                    step === 10 && <ExtraFeedbackSurvey />
                }
                {
                    step === 11 && <SurveyPreview />
                }
                {
                    step === 12 && <SurveySuccess />
                }
            </div>
        </div>
    )
}

export default SurveyPage
