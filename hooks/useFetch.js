import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsRequest, isError, setIsLoading } from '../redux/productSlice'
import axios from 'axios'

const useFetch = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const fetchProduct = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get("http://localhost:3005/api/product");
            return response.data;
        } catch (error) {
            setIsError(error);
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        fetchProduct()
            .then((product) => {
                setData(product);
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        { data, isLoading, isError }
    )


}

export default useFetch