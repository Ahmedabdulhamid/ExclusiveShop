import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk('getProducts', async (IdleDeadline, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        let response = await fetch('https://dummyjson.com/products')
        let data = await response.json();
        return data;

    } catch (error) {
        return rejectWithValue(error)
    }
});
export const getAllProductsCategories = createAsyncThunk('getAllProductsCategories', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        let response = await fetch('https://dummyjson.com/products/categories')
        let data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const getProductDetails= createAsyncThunk('getProductDetails', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        let response = await fetch(`https://dummyjson.com/products/${id}`)
        let data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const getBestSelling = createAsyncThunk('getBestSelling', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        let response = await fetch('https://dummyjson.com/products?sortBy=stock&order=desc&limit=4')
        let data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const exploreProducts = createAsyncThunk('exploreProducts', async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        let response = await fetch('https://dummyjson.com/products?limit=8&sortBy=id&order=desc')
        let data = await response.json()
        return data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const searchProducts=createAsyncThunk('searchProducts',async(key,thunkApi)=>{
    const {rejectWithValue}=thunkApi;
    try {
        const response=await fetch(`https://dummyjson.com/products/search?q=${key}`)
        const data=await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
})
const getProductRedux = createSlice({
    name: "products",
    initialState: {
        lodaing: false,
        products: [],
        productCategories:[],
        bestSelling:[],
       productsExplore:[],
       searchResult:[],
       productDetail:{},
       productImages:[],
       productReviews:[],
       allProducts:[],
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;


        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products.filter((e, index) => {
               
                return index < 10
            })
            state.allProducts=action.payload.products
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
        builder.addCase(getAllProductsCategories.pending, (state, action) => {
            state.loading = true;


        })
        builder.addCase(getAllProductsCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.productCategories=action.payload
            
         

        })
        builder.addCase(getAllProductsCategories.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
        builder.addCase(getBestSelling.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getBestSelling.fulfilled, (state, action) => {
            state.loading = false;
            state.bestSelling=action.payload.products
            

        })
        builder.addCase(getBestSelling.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
        builder.addCase( exploreProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase( exploreProducts.fulfilled, (state, action) => {
            state.loading = false;
           state.productsExplore=action.payload.products;
            

        })
        builder.addCase( exploreProducts.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
        builder.addCase( searchProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase( searchProducts.fulfilled, (state, action) => {
            state.loading = false;
            
            
           state.searchResult=action.payload.products;
            

        })
        builder.addCase( searchProducts.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
        builder.addCase( getProductDetails.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase( getProductDetails.fulfilled, (state, action) => {
            state.loading = false;
            
            state.productDetail=action.payload;
            state.productImages=action.payload.images
            state.productReviews=action.payload.reviews

          console.log(action);
          
            

        })
        builder.addCase( getProductDetails.rejected, (state, action) => {
            state.loading = false;
            console.log(action);

        })
    }
})
export const productsToolkit = getProductRedux.reducer;
