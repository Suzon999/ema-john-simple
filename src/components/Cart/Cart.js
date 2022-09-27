import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart-info'>
            <h2>Order Summary</h2>
            <p>Selected Items :  {quantity} </p>
            <p>Total Price : $ {total} </p>
            <p>Total Shipping : $ {shipping} </p>
            <p>Tax :{tax} </p>
            <h4>Grand Total :{grandTotal} </h4>
        </div>
    );
};

export default Cart;