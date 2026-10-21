import NavList from "./NavList/NavList.jsx";
import PromoBar from "./PromoBar/PromoBar.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import Logo from "../Logo.jsx";
import ActionsSection from "./Actions/ActionsSection.jsx";
import IconFavorite from "../Icons/IconFavorite.jsx";
import IconCart from "../Icons/IconCart.jsx";
import IconProfile from "../Icons/IconProfile.jsx";
import {useCart} from "../../context/CartContext.jsx";
import './Header.css'

const Header = ({searchQuery, setSearchQuery}) => {
    const {cartCount} = useCart();
    const path = window.location.pathname;
    const navItems = [
        {label: 'Главная', href : '/', classNameMark : path === '/' ? '--active' : '' },
        {label: 'Каталог', href : '/catalog', classNameMark : path === '/catalog' ? '--active' : '' },
        {label: 'Для мужчин', href : '/catalog/men', classNameMark : path === '/catalog/men' ? '--active' : '' },
        {label: 'Для женщин', href : '/catalog/women', classNameMark : path === '/catalog/women' ? '--active' : '' },
        {label: 'Для спорта', href : '/catalog/sport', classNameMark : path === '/catalog/sport' ? '--active' : '' },
        {label: 'Для детей', href : '/catalog/kids', classNameMark : path === '/catalog/kids' ? '--active' : '' },
        {label: 'Новинки и скидки', href : '/catalog/sale', classNameMark : '--sale' }
    ]
    const actions = [
        {label : 'Избранное', href : '/favorites', icon : <IconFavorite/>, counter : null},
        {label : 'Профиль', href : '/profile', icon : <IconProfile/>, counter : null},
        {label : 'Корзина', href : '/cart', icon : <IconCart/>, counter : cartCount},
    ]
    return (
        <header className="site-header">
            <PromoBar />
            <div className="header-main">
                <Logo
                    className="logo"
                    href="/"
                    mark ="SS"
                    title="SorokinShop"
                    label="SorokinShop — на главную"
                />
                <SearchForm
                    searchQuery = {searchQuery}
                    setSearchQuery = {setSearchQuery}
                />
                <ActionsSection actions = {actions}/>
            </div>
            <NavList
                className = "main-nav"
                navItems = {navItems}
            />

        </header>
    )
}
export default Header