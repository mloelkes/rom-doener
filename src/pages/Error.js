import Footer from "../components/Footer";

function Error() {
    return (
        <div className="Error">
            <div className="content-page">
                <h1>Seite nicht gefunden</h1>
                <p>Bitte nutze die Navigation, um die verfügbaren Inhalte anzuzeigen.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Error;
