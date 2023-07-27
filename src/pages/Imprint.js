import { useEffect } from "react";
import Footer from "../components/Footer";

function Imprint() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Imprint">
            <div className="content-page">
                <h1>Impressum</h1>
                <h2>Konzept und Projektleitung</h2>
                <p>Kenneth Hujer</p>
                <br/>
                <h2>Gestaltung</h2>
                <p>Marco Lölkes, Kenneth Hujer</p>
                <br/>
                <h2>Technische Umsetzung</h2>
                <p>Marco Lölkes</p>
                <br/>
                <h2>Redaktion</h2>
                <p>Kenneth Hujer</p>
                <br/>
                <h2>Lektorat</h2>
                <br/>
                <h2>Illustration</h2>
                <br/>
                <br/>
                <h2>Rechtliche Hinweise</h2>
                <p>Anbieterkennzeichnung i.S.d. § 5 TMG</p>
                <p>Anbieter dieser Internetpräsenz ist Kenneth Hujer.</p>
                <p>Postanschrift</p>
                <p>Kenneth Hujer<br/>Freiligrathstraße 56<br/>60385 Frankfurt am Main<br/>Telefon: 0157 53433551<br/>E-Mail: kennethhujer@gmail.com</p>
                <p>Inhaltlich verantwortlich für diese Webseite i.S.d. § 55 II RStV: Kenneth Hujer</p>
                <br/>
                <p>© 2023 Kenneth Hujer</p>
            </div>
            <Footer />
        </div>
    )
}

export default Imprint;
