import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { IdeaColorContext } from "../context/ideaColor.context";
import Menu from "./Menu";
import Hamburger from "./Hamburger";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const location = useLocation();

    const { ideaColor, showColor } = useContext(IdeaColorContext);
    
    useEffect(() => {
        setShowMenu(false);
    }, [location])

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    const dotStyle = { backgroundColor: ideaColor };

    return (
        <div className="Navigation">
            <div className="navigation-bar">
                <Hamburger toggleMenu={toggleMenu} />
                <div className="links">
                    <NavLink className={location.pathname.includes("ideas") ? "navlink selected" : "navlink"} to="/ideas">Ideen</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/discover">Karte</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/registry">Register</NavLink>
                    <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/about">Über</NavLink>
                </div>
                <Link className="logo" to="/">
                    <div className={ showColor ? "dot invisible" : "dot visible" }></div>
                    <div className={ showColor ? "dot-overlay visible" : "dot-overlay invisible" } style={dotStyle}></div>
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"}  alt="logo-font"/>
                </Link>
            </div>
            <Menu showMenu={showMenu}/>
        </div>  
    )
}

export default Navigation;
