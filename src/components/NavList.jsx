import NavElement from "./NavElement.jsx";

const NavList = () => {
    return (
        <ul className="main-nav__list">
            <li>
                <a
                    className="main-nav__link main-nav__link--active"
                    href="/">
                    Главная
                </a>
            </li>
            <li>
                <a
                    className="main-nav__link"
                    href="/catalog"
                >
                    Каталог
                </a>
            </li>
            <li>
                <a
                    className="main-nav__link"
                    href="/catalog?category=men"
                >
                    Для мужчин жи есть
                </a>
            </li>
            <li>
                <a
                    className="main-nav__link"
                    href="/catalog?category=woomen"
                >
                    Для женщин
                </a>
            </li>
            <li>
                <a
                    className="main-nav__link"
                    href="/catalog?category=new"

                >
                    Новинки
                </a>
            </li>
            <NavElement />
        </ul>
    )
}

export default NavList;