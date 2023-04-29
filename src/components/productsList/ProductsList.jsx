import React from 'react'
import { useProductsContext } from '../../context/productsContext/ProductsContext';
import { Link } from 'react-router-dom';
import "./productsList.css"
function Products() {
    const { productsData, setProduct } = useProductsContext();
  return (
    <div>
        <div className='main-products'>
            {
            productsData.map(( product ) => {
                return(
                    <div key={product.id} >
                        <div className='product-card'>
                            <Link 
                            onClick={ () => {
                                setProduct(product.id);
                                localStorage.setItem("Product",product.id);
                            }}
                            to={`/products/${product.id}`}>
                                <div className='product-card-img'>
                                    <img src= {product.thumbnail} alt= {product.id} />
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

export default Products