import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ideasData from "../data/ideasData.json";
import Footer from "../components/Footer.js";

function Idea() {
    const { id } = useParams();

    const [idea, setIdea] = useState(undefined);
    
    const fontStyle = {
        color: idea?.color
    }

    const fontAndBorderStyle = {
        color: idea?.color,
        border: `3px solid ${idea?.color}`
    }

    const backgroundStyle = {
        backgroundColor: idea?.color
    }


    useEffect(() => {
        const idea = ideasData.filter(ideasEntry => {
            return ideasEntry.id === id;
        })[0];

        setIdea(idea)
    }, [])

    if (!idea) return <h1>Loading</h1>

    else return (
        <div className="Idea">
            <div className="container">
                <header>
                    <h3 style={fontAndBorderStyle}>{idea.tag}</h3>
                    <h1 style={fontStyle}>„{idea.title}“</h1>
                </header>
                <section className="header-picture-container">
                    <img src={process.env.PUBLIC_URL + "/images" + idea.image} alt="header"/> 
                </section>
                <section style={backgroundStyle} className="intro-container">
                    <p className="picture-description">{idea.image.description}</p>
                </section>
                <article>
                    {idea.text}
                    <p className="publishing-date">Berlin, August 2020</p>
                </article>
                <Footer backgroundStyle={backgroundStyle}/>
            </div>
        </div>
    )
}

export default Idea;
