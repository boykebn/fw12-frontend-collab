import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const getProfileAction = createAsyncThunk(
  "profile/profileAsync",
  async (args, { getState }) => {
    try {
      const { token } = getState().auth;
      const { data } = await http(token).get(`/profile/myAccount`);
      return data.results;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const getSkillsAction = createAsyncThunk(
  "skills/skillsAsync",
  async (args, { getState }) => {
    try {
      const { token } = getState().auth;
      const { data } = await http(token).get(`/profile/skills`);
      return data.results;
    } catch (error) {
      return error.response.data.message;
    }
  }
);
