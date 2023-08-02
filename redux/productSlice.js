import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        getProductsRequest: (state, action) => {
            state.products = [...state.products, action.payload]
            state.loading = false
        },
        setIsLoading: (state) => {
            state.products = true
        },
        setIsError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { getProductsRequest, setIsLoading, setIsError } = productSlice.actions
export default productSlice.reducer

export const fetchproducts = (state) => state.items.products

