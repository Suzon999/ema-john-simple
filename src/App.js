
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';

import Main from './layouts/Main';
import { productAndCartData } from './loaders/ProductsAndCartData';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productAndCartData,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }
      ]

    },
    {
      path: "about",
      element: <About></About>
    }
  ])
  return (
    <div >
      <RouterProvider router={router} ></RouterProvider>


    </div>
  );
}

export default App;
