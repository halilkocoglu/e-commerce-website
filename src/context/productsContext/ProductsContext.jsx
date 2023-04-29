import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

const ProductProvider =  ({children}) => {
    const [productCategories, setProductsCategories] = useState([]);
    const [productsData, setProductsData] = useState ([]);
    const [category, setCategory] = useState ("");
    // const [product, setProduct] = useState("");

    useEffect(() => {
        axios('https://dummyjson.com/products')
        .then(res => res.data)
        .then(data => setProductsData(data.products))
        axios('https://dummyjson.com/products/categories')
        .then(res => res.data)
        .then(data => setProductsCategories(data))
    },[])
    const values = {
        productsData,
        productCategories,
        category,
        setCategory,
    }
    return (
        <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
    )
}

const useProductsContext = () => useContext(ProductsContext)

export {
    useProductsContext,
    ProductProvider,
}