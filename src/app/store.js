import { configureStore } from "@reduxjs/toolkit"
import enquiryReducer from "../features/enquirySlice.js"

const store = configureStore({
    reducer: {
        enquiry: enquiryReducer
    }
})

export default store;
