import React from 'react';
import { Link } from "react-router-dom";

function Navigation(props) { 
    return (
        <div className="Navigation">
            <div className="links">
                <Link className="link" to="/ideas">Ideen</Link>
                <Link className="link" to="/discover">Karte</Link>
                <Link className="link" to="/registry">Register</Link>
                <Link className="link" to="/about">Über</Link>
            </div>

            <Link className="link home" to="/">Rom/Döner</Link>
        </div>
    )
}

export default Navigation;
