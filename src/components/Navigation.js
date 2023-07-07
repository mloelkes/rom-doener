import React from 'react';
import { Link } from "react-router-dom";

function Navigation(props) { 
    return (
        <div className="Navigation">
            <div className="links">
                <Link className="link" to="/ideen">Ideen</Link>
                <Link className="link" to="/discover">Karte</Link>
                <Link className="link" to="/register">Register</Link>
                <Link className="link" to="/about">Über</Link>
            </div>

            <Link className="link home" to="/">Rom/Döner – Ideen für Frankfurt</Link>
        </div>
    )
}

export default Navigation;
