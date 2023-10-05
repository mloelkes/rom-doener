import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ideasData from "../data/ideasData.json";

function PrivacyPolicy() {
    const [randomColor, setRandomColor] = useState("rgb(255,255,255)");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * ideasData.length);

        return ideasData[randomIndex].color;
    }

    return (
        <div className="PrivacyPolicy" style={{ backgroundColor: randomColor }}>
            <div className="content-page">
                <h1>Datenschutzerklärung</h1>
                <h2>Geltungsbereich und Umgang mit personenbezogenen Daten</h2>
                <p>Diese Datenschutzerklärung informiert Nutzer über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website. Die gesetzlichen Regelungen zum Datenschutz gehen aus der europäischen Datenschutzgrundverordnung hervor. Das <a href="https://www.bussgeldkatalog.org/bdsg/">Bundesdatenschutzgesetz</a> (BDSG) und das Telemediengesetz (TMG) gelten ergänzend.</p>
                <p>Verantwortlich für diese Website ist folgender Anbieter:</p>
                <p>Kenneth Hujer<br/>Freiligrathstraße 56<br/>60385 Frankfurt am Main<br/>Telefon: 0157 53433551<br/>E-Mail: kennethhujer@gmail.com</p>
                <br/>
                <h2>Personenbezogene Daten</h2>
                <p>Zu den personenbezogenen Daten zählen alle Informationen, die sich auf eine natürliche Person beziehen. Dabei kann es sich zum Beispiel um den Namen, eine Anschrift, ein Geburtsdatum oder eine E-Mail-Adresse handeln. Diese Informationen werden nur gemäß der gesetzlichen Datenschutzbestimmungen auf der Website erhoben und verarbeitet.</p>
                <br/>
                <h2>Zugriffsdaten</h2>
                <p>Nutzen Sie diese Website, um sich zu informieren und geben keine Daten an, dann werden nur die Daten verarbeitet, die zur Anzeige der Website auf dem von Ihnen verwendeten Gerät erforderlich sind. Das sind insbesondere:</p>
                <ul>
                    <li>IP-Adresse</li>
                    <li>Zeitpunkt der Anfrage</li>
                    <li>Übertragene Datenmenge</li>
                    <li>Quellseite</li>
                    <li>verwendeter Browser</li>
                    <li>Betriebssystem</li>
                </ul>
                <p>Rechtsgrundlage für die Verarbeitung dieser Daten sind berechtigte Interessen gemäß Art. 6 Abs. 1 UAbs. 1 Buchstabe f DSGVO, um die Darstellung der Website grundsätzlich zu ermöglichen.</p>
                <p>Darüber hinaus können Sie verschiedene Leistungen auf der Website nutzen, bei der weitere personenbezogene und nicht personenbezogene Daten verarbeitet werden.</p>
                <p>Als betroffene Person haben Sie folgende Rechte:</p>
                <ul>
                    <li>Recht auf Berichtigung der Sie betreffenden Daten, wenn diese unrichtig oder unvollständig gespeichert werden (Art. 16 DSGVO) </li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten (Art. 21 DSGVO) </li>
                    <li>Recht nicht einer ausschließlich auf einer automatisierten Verarbeitung beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt (Art. 22 DSGVO)</li>
                    <li>Recht, sich bei einem vermuteten Verstoß gegen das Datenschutzrecht bei der zuständigen Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
                </ul>
                <br/>
                <h2>Cookies</h2>
                <p>Beim Besuch der Website können Cookies auf Ihrem Gerät gespeichert werden. Dabei handelt es sich um kleine Textdateien, die von dem von Ihnen verwendeten Browser gespeichert werden. Cookies dienen dazu, das Internetangebot benutzerfreundlicher zu machen. Mithilfe von Cookies kann beispielsweise das Gerät, mit dem diese Website aufgerufen wurde, bei einem erneuten Aufruf erkannt werden. Möglich ist dies, weil Cookies die IP-Adresse übermitteln.</p>
                <p>Das Setzen von Cookies können Sie durch Einstellungen im Browser einschränken oder verhindern. Das Blockieren kann unter Umständen jedoch dazu führen, dass nicht mehr alle Funktionen dieser Website nutzbar sind.</p>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;
