import { getStoredCart } from "../components/Cart/utilities/fakedb"

export const productAndCartData = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json()

    const saveCart = getStoredCart()
    const previousCart = [];
    // console.log(saveCart)
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct)
        if (addedProduct) {
            const quantity = saveCart[id];
            // console.log(id, quantity);
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    return { products, previousCart };
}