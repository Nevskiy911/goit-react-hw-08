import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const removeAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "register",
  async (body, thunkApi) => {
    try {
      const response = await goitApi.post("/users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkApi) => {
    try {
      const response = await goitApi.post("/users/login", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("/users/logout");
    removeAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const savedToken = thunkApi.getState().auth.token;
      if (!savedToken) {
        return thunkApi.rejectWithValue("Token is not exist!");
      }
      setAuthHeader(savedToken);
      const response = await goitApi.get("/users/current");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
