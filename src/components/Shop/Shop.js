import React from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../Cart/utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css'




const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }

        }
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                        kye={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default Shop;