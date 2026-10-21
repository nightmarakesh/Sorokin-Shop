import NavElement from "./NavElement.jsx";
import './NavList.css'
const NavList = (props) => {
   // в перспективе сдеалать проп currentDir, что бы href мог отличаться в зависимости от текущей директории.
    const {
        className,
        navItems = []
    } = props;
    return (
        <nav className={className}>
            <ul className={`${className}__list`}>
                {navItems.map(({label, href,classNameMark}) => (
                    <NavElement
                        key={label}
                        label={label}
                        href={href}
                        className={`${className}__link ${className}__link${classNameMark}`}
                    />
                ))}
            </ul>
        </nav>

    )
}

export default NavList;