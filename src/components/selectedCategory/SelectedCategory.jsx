import React from 'react'

import "../productsList/productsList.css"
import { useProductsContext } from '../../context/productsContext/ProductsContext';
import { Link } from 'react-router-dom';




function SelectedCategory() {
    const { productsData, category ,setProduct } = useProductsContext();
  return (
    <div className='main-container'>
        <div className='main-products'>
            {
            productsData.map(( product ) => {
                
                return(
                    
                    product.category === category &&
                    <div key={product.id} >
                        <div className='product-card'>
                            <Link  
                            onClick={ () => {
                                setProduct(product.id);
                                localStorage.setItem("Product",product.id);
                            }}
                            to={`/products/${product.id}`}>
                                <div className='product-card-img'>
                                    <img src= {product.thumbnail} alt= {product.title} />
                                </div>
                                <div className='product-card-title'>
                                    {product.title}
                                </div>
                                <div className='product-card-info'> 
                                    <span>$ {product.price}</span>
                                    <div>
                                    {product.rating}
                                    <span className='rate-star'>&#8902;</span> 
                                    </div>
                                </div>
                                
                            </Link>
                        </div>
                            
                    </div>
                    )}
                )
            }
            
        </div>
    </div>
  )
}

export default SelectedCategory