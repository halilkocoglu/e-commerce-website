import React from 'react'

import "../productsList/productsList.css"
import { useProductsContext } from '../../context/productsContext/ProductsContext';
import { Link } from 'react-router-dom';




function SelectedCategory() {
    const { productsData, category } = useProductsContext();
    console.log(productsData);
  return (
    <div className='main-container'>
        <div className='main-products'>
            {
            productsData.map(( product ) => {
                console.log(product);
                return(
                    product.category === category &&
                    <div key={product.id} >
                        <div className='product-card'>
                            <Link to={`/products/category/${product.category}/${(product.title).replaceAll(" ","-")}`}>
                                <div className='product-card-img'>
                                    <img src= {product.images[0]} alt= {product.title} />
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
                )
            })
            }
        </div>
    </div>
  )
}

export default SelectedCategory