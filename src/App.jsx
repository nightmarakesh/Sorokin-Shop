import Router from "./Router.jsx";
import HomePage from "./pages/HomePage.jsx";
import Catalog from "./pages/Catalog.jsx";
import Cart from "./features/Cart/Cart.jsx";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import {FavoritesProvider} from "./context/FavoritesContext.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import ForMen from "./pages/ForMen.jsx";
import Profile from "./pages/ProfilePage.jsx";
import {OrderProvider} from "./context/OrderContext.jsx";
import ForWomen from "./pages/ForWomen.jsx";
import ForSport from "./pages/ForSport.jsx";
import ForKids from "./pages/ForKids.jsx";
import ProductPage from "./features/Products/ProductPage/ProductPage.jsx";

function App() {

    const routes = {
        '/':HomePage,
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
        '/favorites': Favorites,
        '/catalog/men' : ForMen,
        '/catalog/women' : ForWomen,
        '/catalog/sport' : ForSport,
        '/catalog/kids' : ForKids,
        '/profile': Profile,
        '/catalog/:id' : ProductPage
    }

    return (
        <CartProvider >
            <FavoritesProvider>
                <UserProvider>
                    <OrderProvider>
                        <ProductsProvider>
                            <>
                                <Router
                                    routes = {routes}
                                />
                            </>
                        </ProductsProvider>
                    </OrderProvider>
                </UserProvider>
            </FavoritesProvider>
    </CartProvider>

  )
}

export default App;
