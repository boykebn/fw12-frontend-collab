import { createSlice } from "@reduxjs/toolkit";
import { getProfileAction, getSkillsAction } from "../actions/profile";

const initialState = {
  picture: null,
  name: null,
  phoneNumber: null,
  email: null,
  address: null,
  bio: null,
  jobDesk: null,
  instagram: null,
  github: null,
  gitlab: null,
  status: null,
  linkedin: null,
  skills: null,
};

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileAction: (state) => {
      state.picture = null;
      state.name = null;
      state.phoneNumber = null;
      state.email = state.address = null;
      state.bio = null;
      state.jobDesk = null;
      state.instagram = null;
      state.github = null;
      state.gitlab = null;
      state.status = null;
      state.linkedin = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(getProfileAction.fulfilled, (state, { payload }) => {
      state.picture = payload.picture;
      state.name = payload.name;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      state.address = payload.address;
      state.bio = payload.bio;
      state.jobDesk = payload.jobDesk;
      state.instagram = payload.instagram;
      state.github = payload.github;
      state.gitlab = payload.gitlab;
      state.status = payload.status;
      state.linkedin = payload.linkedin;
    });
    build.addCase(getSkillsAction.fulfilled, (state, { payload }) => {
      state.skills = payload;
    });
  },
});

export const { clearProfileAction } = profileReducer.actions;

export default profileReducer.reducer;
