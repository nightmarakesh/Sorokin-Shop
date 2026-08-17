import NavList from "./NavList.jsx";
import PromoBar from "./PromoBar.jsx";
import SearchForm from "./SearchForm.jsx";
import Logo from "./Logo.jsx";
import ActionsSection from "./ActionsSection.jsx";
import IconFavorite from "./IconFavorite.jsx";
import IconCart from "./IconCart.jsx";
import IconProfile from "./IconProfile.jsx";

const Header = () => {
    const navItems = [
        {label: 'Главная', href : '/', classNameMark : '--active' },
        {label: 'Каталог', href : '/catalog', classNameMark : ''},
        {label: 'Для мужчин', href : '/catalog?category=men', classNameMark : ''},
        {label: 'Для женщин', href : '/catalog?category=women', classNameMark : ''},
        {label: 'Новинки', href : '/catalog?category=new', classNameMark : ''},
        {label: 'Скидки', href : '/catalog?category=sale', classNameMark : '--sale'}
    ]
    const actions = [
        {label : 'Избранное', href : '/favorites', icon : <IconFavorite/>, counter : null},
        {label : 'Профиль', href : '/profile', icon : <IconProfile/>, counter : null},
        {label : 'Корзина', href : '/cart', icon : <IconCart/>, counter : 0},
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
                <SearchForm />
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