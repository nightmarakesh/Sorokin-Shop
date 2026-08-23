import './App.css';
import Router from "./Router.jsx";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Cart from "./pages/Cart.jsx";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {

    const routes = {
        '/':Home,
        '/catalog' : Catalog,
        '*' : () => <div className='error'>
            <div className={'error__number'}>404</div>
            <div className={'error__message'}>
                <p>Страница не найдена.</p>
                <p> Cсылка устарела или адрес введен не верно.</p>
            </div>
            <a href="/" className="btn">На главную</a>
        </div>,
        '/cart': Cart,
    }

    return (
        <CartProvider >
            <ProductsProvider>
                <>
                    <Router
                        routes = {routes}
                    />
                </>
            </ProductsProvider>
        </CartProvider>
  )
}

export default App;
