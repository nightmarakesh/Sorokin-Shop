import './App.css';
import Router from "./Router.jsx";
import {useState, useEffect} from "react";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";

function App() {
   const [cartCount, setCartCount] = useState(()=> {
           const saveCount = localStorage.getItem('cartCount');
           if (saveCount) {
               return JSON.parse(saveCount);
           }
           return 0;
       }
    )

    useEffect(() => {
        localStorage.setItem('cartCount',JSON.stringify(cartCount));
    },[cartCount]);
    const onAddToCart = (productId) => {
        console.log(`adding product: ${productId}`);
        setCartCount(cartCount => cartCount + 1);
    }


    const routes = {
        '/':Home,
        '/catalog' : Catalog,
        '*' : () => <div>Error page 404</div>
    }
  return (
    <>
        <Router
            routes = {routes}
            cartCount = {cartCount}
            onAddToCart = {onAddToCart}
        />
    </>
  )
}

export default App;
