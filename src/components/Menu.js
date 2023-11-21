import { NavLink, useLocation } from "react-router-dom";

function Menu({ showMenu }) {
    const location = useLocation();

    return (
        <div className={ showMenu ? "Menu" : "Menu hide" } >
                <NavLink className={location.pathname.includes("ideas") ? "navlink selected" : "navlink"} to="/ideas">Ideen</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/discover">Karte</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/registry">Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/about">Über</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/privacy">Datenschutz</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/imprint">Impressum</NavLink>
        </div>
    )
}

export default Menu;
