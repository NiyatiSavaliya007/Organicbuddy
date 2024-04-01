import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService} from "./productService";
//import { message } from "antd";

  export const getAllProducts = createAsyncThunk(
    "product/get",
    async (thunkAPI) => {
      try {
        return await productService.getProducts();
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );

  export const addToWishlist = createAsyncThunk(
    "product/wishlist",
    async (prodId,thunkAPI) => {
      try {
        return await productService.addToWishlist(prodId);
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  );

  const productState = {
    product:"",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
        // if(state.isSuccess === true) {
        //     message.success("User created successfully");
        // }
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;  
        // if(state.isError === true) {
        //   message.error("Something went wrong");
        // }      
      }).addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product Added To Wishlist Successfully";
        // if(state.isSuccess === true) {
        //     message.success("User created successfully");
        // }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;  
        // if(state.isError === true) {
        //   message.error("Something went wrong");
        // }      
      })
    }, 
});

export default productSlice.reducer;
