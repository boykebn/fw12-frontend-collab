import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http"

export const loginAction = createAsyncThunk('auth/loginAsync', async({email, password, cb}) => {
    try {
        const {data} = await http().post('/auth/login', {email, password})
        cb()
        return data.results.token
    } catch (error) {
        return error.response.data.message
    }
})

export const registerEmployeAction = createAsyncThunk("auth/registerEmployeAction", async ({ name, email, phoneNumber, password, cb }) => {
    const { data } = await http().post(`/auth/register-employe`, { name, email, phoneNumber, password });
    cb()
    return data.results.token
  });
  
export const registerRecruiterAction = createAsyncThunk("auth/registerRecruiterAction", async ({ name, email, phoneNumber, password, company, field, cb }) => {
    const { data } = await http().post(`/auth/register-recruiter`, { name, email, phoneNumber, password, company, field });
    cb()
    return data.results.token
  });
  