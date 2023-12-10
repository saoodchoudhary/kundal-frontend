
import {configureStore} from "@reduxjs/toolkit"
import UserCartSlice from "./userCartSlice"



const ReduxStore =configureStore({
    reducer:{
        userCart:UserCartSlice.reducer,
    }
})

export default ReduxStore