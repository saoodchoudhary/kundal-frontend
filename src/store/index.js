
import {configureStore} from "@reduxjs/toolkit"
import UserCartSlice from "./userCartSlice"
import SurveySlice from "./surveySlice"



const ReduxStore =configureStore({
    reducer:{
        userCart:UserCartSlice.reducer,
        survey:SurveySlice.reducer
    }
})

export default ReduxStore