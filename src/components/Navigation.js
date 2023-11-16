import { useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { IdeaColorContext } from "../context/ideaColor.context";

function Navigation() {
    const location = useLocation();

    const { ideaColor } = useContext(IdeaColorContext);

    const pinStyle = ideaColor ? { backgroundColor: ideaColor } : { backgroundColor: "#F6F6F4" };

    return (
        <div className="Navigation">
            <div className="links">
                <NavLink className={["/registry", "/discover", "/about"].includes(location.pathname) ? "navlink" : "navlink selected"} to="/ideas">Ideen</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/registry">Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/discover">Karte</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/about">Über</NavLink>
            </div>
            <Link className="logo" to="/">
                <div style={pinStyle} className="dot"></div>
                <img src={process.env.PUBLIC_URL + "/images/logo.png"}  alt="logo-font"/>
            </Link>
        </div>  
    )
}

export default Navigation;
