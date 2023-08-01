import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: "product",
    initialState,

    reducers: {
        getProductsRequest: (state, action) => {
            state.loading = true,
                state.error = null
        },
        getProductsSuccess: (state, action) => {
            state.products = [...state, action.payload]
            state.loading = false
        },
        getProductsFailure: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    }
})

export const { getProductsRequest, getProductsSuccess, getProductsFailure } = productSlice.actions
export default productSlice.reducer