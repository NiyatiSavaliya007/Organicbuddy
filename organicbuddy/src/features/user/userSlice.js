import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService} from "./userService";
import { message } from "antd";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData,thunkAPI) => {
      try {
        return await authService.register(userData)
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );

  export const loginUser = createAsyncThunk(
    "auth/login",
    async (userData,thunkAPI) => {
      try {
        return await authService.login(userData)
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );

const getCustomerfromLocalStorage =localStorage.getItem("customer")?JSON.parse(localStorage.getItem("customer")) :null;

const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if(state.isSuccess === true) {
            message.success("User created successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;  
        if(state.isError === true) {
          message.error("Something went wrong");
        }      
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        if(state.isSuccess === true) {
          localStorage.setItem("token",action.payload.token);
            message.success("User logged In successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;  
        if(state.isError === true) {
            message.error("Something went wrong");
        }      
      });
    } 
})

export default authSlice.reducer;
