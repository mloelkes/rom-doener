import { NavLink } from "react-router-dom";

function Footer({backgroundStyle}) {

    return (
        <footer style={backgroundStyle}>
            <span><NavLink to="/privacy" className={({isActive}) => (isActive ? "link selected" : "link")}>Datenschutz</NavLink><NavLink to="/imprint" className={({isActive}) => (isActive ? "link selected" : "link")}>Impressum</NavLink></span>
        </footer>
    )
}

export default Footer;
