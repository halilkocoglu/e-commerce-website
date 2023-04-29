import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../../context/productsContext/ProductsContext'
import "./productDetailSection.css"
import { Link } from 'react-router-dom';

function ProductDetailSection() {
    const { productsData, product } = useProductsContext();
    const [imgCount, setImgCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [slideAnimation, setSlideAnimation] = useState("")
    useEffect(() => {
        setTimeout(() => {
            isActive && setIsActive(false);

        }, 550);
    }, [isActive])
    return (
        <div>
            <div className='product-container'>
                {
                    productsData.map(productItem => {
                        return (
                            productItem.id === product &&
                            <div key={productItem.id} className='product-container-info'>
                                <div className='product-container-info-slider'>
                                    <img className={isActive ? slideAnimation : ""} src={`${productItem.images[imgCount > productItem.images.length - 1 || imgCount < 0
                                        ? setImgCount(0)
                                        : imgCount
                                    ]}`} alt={productItem.id} />
                                    <Link
                                        onClick={() => {
                                            setIsActive(true)
                                            setSlideAnimation("fade-in-left")
                                            setImgCount(imgCount + 1)
                                        }}
                                        className='next' > &#187; </Link>
                                    <Link
                                        onClick={() => {
                                            setSlideAnimation("fade-in-right")
                                            setIsActive(true)
                                            setImgCount(imgCount - 1)
                                        }}
                                        className='prev'>  &#171; </Link>

                                </div>
                                <div className='product-container-info-info'>
                                    <h2>{productItem.title}</h2>
                                    <p>{productItem.brand}</p>
                                    <div>
                                        <p>Price : ${productItem.price}</p>
                                        <p> &#8902; {productItem.rating} </p>
                                    </div>
                                    <p>{productItem.description}</p>
                                    <p>In Stock : {productItem.stock}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductDetailSection