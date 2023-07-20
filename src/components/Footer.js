import { Link } from "react-router-dom";

function Footer({backgroundStyle}) {

    return (
        <footer style={backgroundStyle}>
            <span><Link to="/privacy">Datenschutz</Link><Link to="/imprint">Impressum</Link></span>
        </footer>
    )
}

export default Footer;
