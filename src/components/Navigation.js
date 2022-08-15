import React from 'react';
import { Link } from "react-router-dom";

function Navigation(props) { 
    return (
        <div className="Navigation">
            <div className="links">
                <Link className="link" to="/interviews">Interviews</Link>
                <Link className="link" to="/discover">Karte</Link>
                <Link className="link" to="/register">Register</Link>
                <Link className="link" to="/ueber">Über</Link>
            </div>

            <Link className="link home" to="/">Frankfurt Interviews</Link>
        </div>
    )
}

export default Navigation;
