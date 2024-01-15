import { createSlice } from "@reduxjs/toolkit";


const SurveySlice = createSlice({
    name:"surveyslice",
    initialState:{
        step:1,
        formData:{},
        product1:{},
        product2:{},
        product3:{},
        qStep1:1, 
        qStep2:1, 
        qStep3:1, 
        navCount:3,
        q2:1,
        currentProduct:1
    },
    reducers:{
        stepCount:(state, action)=>{
            state.step = action.payload

        },
        questionCount1:(state, action)=>{
            state.qStep1 = action.payload
        },
        questionCount2:(state, action)=>{
            state.qStep2 = action.payload
        },
        questionCount3:(state, action)=>{
            state.qStep3 = action.payload
        },
        q2Count:(state, action)=>{
            state.q2 = action.payload
        },
        navCount:(state, action)=>{
            state.navCount = action.payload + 2
        },
        currentProductCount:(state, action)=>{
            state.currentProduct = action.payload
        },
        submitForm:(state, action)=>{
            const {key, value} = action.payload
            state.formData[key] =value
        },
        submitQuestion:(state, action)=>{
            const {key, value} = action.payload
            const currentProduct = state.currentProduct;
            if(currentProduct === 1)
            {
                state.product1[key] =value;
            }
            else if(currentProduct === 2){
                state.product2[key] = value;
            }
             else if(currentProduct === 3){
                state.product3[key] = value;
            }
            

        }
    }
});

export const SurveyAction = SurveySlice.actions;

export default SurveySlice