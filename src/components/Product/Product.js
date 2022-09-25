import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, ratings, seller } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name} </h4>
                <h3>Price : ${price} </h3>
                <p>Ratings :{ratings} </p>

                <p>Manufacturer :{seller} </p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <h5 className='btn-text'>Add To Cart</h5>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;