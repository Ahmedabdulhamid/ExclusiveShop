import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
export const getProductsByCategory = createAsyncThunk('getProductsByCategory', async (key, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        let response = await fetch(`https://dummyjson.com/products/category/${key}`)
        let data = await response.json();
        return data;

    } catch (error) {
        return rejectWithValue(error)
    }
});
const getProductCat = createSlice({
    name:"categories",
    initialState:{
        loading:false,
        productsByCat:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(getProductsByCategory.pending,(state,action)=>{
            console.log(action);
            state.loading=true
        })
        builder.addCase(getProductsByCategory.fulfilled,(state,action)=>{
            state.productsByCat=action.payload.products
            state.loading=false
        })
        builder.addCase(getProductsByCategory.rejected,(state,action)=>{
            console.log(action);
            state.loading=false
        })
    }
})
export const categ=getProductCat.reducer
