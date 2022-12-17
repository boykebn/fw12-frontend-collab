import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{

    }
})

export default authReducer.reducer