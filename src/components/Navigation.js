import { useContext } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { IdeaColorContext } from "../context/ideaColor.context";

function Navigation() {
    const location = useLocation();

    const { ideaColor, showColor } = useContext(IdeaColorContext);
    
    const dotStyle = { backgroundColor: ideaColor };

    return (
        <div className="Navigation">
            <div className="links">
                <NavLink className={["/registry", "/discover", "/about"].includes(location.pathname) ? "navlink" : "navlink selected"} to="/ideas">Ideen</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/registry">Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/discover">Karte</NavLink>
                <NavLink className={({isActive}) => (isActive ? "navlink selected" : "navlink")} to="/about">Über</NavLink>
            </div>
            <Link className="logo" to="/">
                <div className={ showColor ? "dot invisible" : "dot visible" }></div>
                <div className={ showColor ? "dot-overlay visible" : "dot-overlay invisible" } style={dotStyle}></div>
                <img src={process.env.PUBLIC_URL + "/images/logo.png"}  alt="logo-font"/>
            </Link>
        </div>  
    )
}

export default Navigation;
