import React from 'react'
import { useProductsContext } from '../../context/productsContext/ProductsContext'
import "./categories.css"
import { Link } from 'react-router-dom';

function Categories() {
    const {productCategories, setCategory } = useProductsContext();
  return (
    <div className='header-categories'>
        {
            productCategories.map((categoryItem,index) => {
                return(
                    <div key={index} className='header-categories-item'>
                        <Link  onClick={() => setCategory(categoryItem)} to={`/products/category/${categoryItem}`} >{categoryItem}</Link>
                    </div>
                )
                
            } )
        }
    </div>
  )
}

export default Categories