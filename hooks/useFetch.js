import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsRequest, isError, setIsLoading } from '../redux/productSlice'
import axios from 'axios'

const useFetch = () => {
    const dispatch = useDispatch()
    const [searchQry, setSearchQry] = useState("");
    const [searchResult, setSearchResult] = useState([]);
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

    //This function handles search products
    const handleSearch = async () => {
        try {
            const response = await axios
                .get(`http://localhost:3005/api/product/search/${searchQry}`)
                .then((res) => {
                    setSearchResult(res.data);
                    setSearchQry("");
                })
                .catch((error) => console.log(error));
            return response;
        } catch (error) {
            console.log(error, "failed to get product");
        }
    };

    return (
        { data, isLoading, isError, handleSearch, searchQry, setSearchQry, searchResult, setSearchResult }
    )


}

export default useFetch