import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth";
import profile from "./profile";

const authConfig = {
  key: "auth",
  storage,
};

const profileConfig = {
  key: "profile",
  storage,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile: persistReducer(profileConfig, profile),
});

export default reducer;
