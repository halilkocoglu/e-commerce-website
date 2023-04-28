import React from 'react'
import { useProductsContext } from '../../context/productsContext/ProductsContext'
import "./categories.css"
import { Link } from 'react-router-dom';

function Categories() {
    const {productCategories } = useProductsContext();
  return (
    <div className='header-categories'>
        {
            productCategories.map((category,index) => {
                return(
                    <div key={index} className='header-categories-item'>
                        <Link to={`/prodcuts/${category}`} >{category}</Link>
                    </div>
                )
                
            } )
        }
    </div>
  )
}

export default Categories