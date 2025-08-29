import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../index.js";

// Async thunk
export const fetchUserID = createAsyncThunk(
    "enquiry/fetchEnquiry",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("/enquiry-form", formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const enquirySlice = createSlice({
    name: "enquiry",
    initialState: {
        loading: false,
        error: null,
        enquiryData: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserID.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.enquiryData = null;
            })
            .addCase(fetchUserID.fulfilled, (state, action) => {
                state.loading = false;
                state.enquiryData = action.payload;
            })
            .addCase(fetchUserID.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export default enquirySlice.reducer;
