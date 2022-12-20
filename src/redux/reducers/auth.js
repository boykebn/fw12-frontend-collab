import { createSlice } from "@reduxjs/toolkit";
import { loginAction, loginActionEmploye, loginActionRecruiter, registerEmployeAction, registerRecruiterAction } from "../actions/auth";

const initialState = {
    token: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{

    },
    extraReducers: (build) => {
        build.addCase(loginAction.fulfilled, (state, {payload}) => {
            state.token = payload
        });
        build.addCase(loginActionEmploye.fulfilled, (state, {payload}) => {
            state.token = payload
        });
        build.addCase(loginActionRecruiter.fulfilled, (state, {payload}) => {
            state.token = payload
        });
        build.addCase(registerEmployeAction.fulfilled, (state, {payload}) => {
            state.token = payload
        });
        build.addCase(registerRecruiterAction.fulfilled, (state, {payload}) => {
            state.token = payload
        });
    }
})

export default authReducer.reducer