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
                <h2>Konzept und Redaktion</h2>
                <p>Kenneth Hujer</p>
                <br/>
                <h2>Gestaltung</h2>
                <p>Marco Lölkes, Kenneth Hujer, Yuriy Matveev (<a href="https://mr-ollo.com">mr-ollo.com</a>)</p>
                <br/>
                <h2>Illustration</h2>
                <p>Fabia Matveev (<a href="https://www.fabiafabia.com">fabiafabia.com</a>)</p>
                <br/>
                <h2>Technische Umsetzung</h2>
                <p>Marco Lölkes</p>
                <br/>
                <h2>Rechtliche Hinweise</h2>
                <p>Anbieterkennzeichnung i.S.d. § 5 TMG</p>
                <p>Anbieter dieser Internetpräsenz ist Kenneth Hujer.</p>
                <p>Postanschrift</p>
                <p>Kenneth Hujer<br/>Freiligrathstraße 56<br/>60385 Frankfurt am Main<br/>E-Mail: <a href="mailto:kennethhujer@gmail.com">kennethhujer@gmail.com</a></p>
                <p>Inhaltlich verantwortlich für diese Webseite i.S.d. § 55 II RStV: Kenneth Hujer</p>
                <br/>
                <p>© 2026 Kenneth Hujer</p>
            </div>
            <Footer />
        </div>
    )
}

export default Imprint;
