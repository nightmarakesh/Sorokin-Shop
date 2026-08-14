import NavList from "./NavList.jsx";
import PromoBar from "./PromoBar.jsx";
import SearchForm from "./SearchForm.jsx";
import Logo from "./Logo.jsx";
import ActionsSection from "./ActionsSection.jsx";

const Header = () => {
    return (
        <header className="site-header">
            <PromoBar />
            <div className="header-main">
                <Logo />
                <SearchForm />
                <ActionsSection />
            </div>

            <div className="main-nav">
                <nav>
                    <NavList />
                </nav>
            </div>
        </header>
    )
}
export default Header