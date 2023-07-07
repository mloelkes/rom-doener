import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import texts from "../data/texts.json";
import Footer from "../components/Footer.js";

function Idee() {
    const { id } = useParams();

    const [idee, setIdee] = useState(undefined);
    
    const fontStyle = {
        color: idee?.color
    }

    const fontAndBorderStyle = {
        color: idee?.color,
        border: `3px solid ${idee?.color}`
    }

    const backgroundStyle = {
        backgroundColor: idee?.color
    }


    useEffect(() => {
        const text = texts.filter(text => {
            return text.id === id;
        })[0];

        setIdee(text)
    }, [])

    if (!idee) return <h1>Loading</h1>

    else return (
        <div className="Idee">
            <div className="container">
                <header>
                    <h3 style={fontAndBorderStyle}>{idee.tag}</h3>
                    <h1 style={fontStyle}>„{idee.title}“</h1>
                </header>
                <section className="header-picture-container">
                    <img src={process.env.PUBLIC_URL + "/images" + idee.image} alt="header"/> 
                </section>
                <section style={backgroundStyle} className="intro-container">
                    <p className="picture-description">{idee.image.description}</p>
                </section>
                <article>
                    {idee.content}
                    <p className="publishing-date">Berlin, August 2020</p>
                </article>
                <Footer backgroundStyle={backgroundStyle}/>
            </div>
        </div>
    )
}

export default Idee;
