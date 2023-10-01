import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Navigation(props) { 
    return (
        <div className="Navigation">
            <div className="links">
                <NavLink className={({isActive}) => (isActive ? "link selected" : "link")} to="/ideas">Ideen</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link selected" : "link")} to="/registry">Register</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link selected" : "link")} to="/discover">Karte</NavLink>
                <NavLink className={({isActive}) => (isActive ? "link selected" : "link")} to="/about">Über</NavLink>
            </div>

            {/* <Link className="link home" to="/">Rom/Döner</Link> */}
            <Link className="home" to="/"><img src={process.env.PUBLIC_URL + "/images/logo.png"}  alt="logo" /></Link>
        </div>
    )
}

export default Navigation;
