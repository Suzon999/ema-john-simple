import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    const { name, price, quantity, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-info">
                    <p>{name} </p>
                    <p><small>Peice : {price} </small></p>
                    <p><small>quantity : {quantity} </small></p>
                </div>
                <div className="delete-button">
                    <button>delete</button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;