import { NavLink } from "react-router-dom";

function Footer({backgroundStyle}) {

    return (
        <footer style={backgroundStyle}>
            <span><NavLink to="/privacy" className={({isActive}) => (isActive ? "navlink selected" : "navlink")}>Datenschutz</NavLink><NavLink to="/imprint" className={({isActive}) => (isActive ? "navlink selected" : "navlink")}>Impressum</NavLink></span>
        </footer>
    )
}

export default Footer;
