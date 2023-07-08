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

    const introStyle = {
        fontWeight: 600,
        fontSize: "24px"
    }

    const hightlightStyle = {
        fontSize: "24px",
        fontWeight: 600,
        paddingLeft: "160px"
    }

    useEffect(() => {
        const idea = ideasData.filter(ideasEntry => {
            return ideasEntry.id === id;
        })[0];

        setIdea(idea)
    }, [])

    const ideaToDisplay = idea?.text.map((textEntry, i) => {
        if (textEntry.type === "intro") return <p key={i} style={introStyle} >{textEntry.paragraph}</p>
        else if (textEntry.type === "highlight") {
            return <>
                <div className="highlight-line"></div>
                <p key={i} style={hightlightStyle} >{textEntry.paragraph}</p>
            </>
        }
        else return <p key={i} >{textEntry.paragraph}</p>
    })

    if (!idea) return <h3>Loading</h3>
    else return (
        <div className="Idea">
            <div className="container">
                <header>
                    <h3 style={fontAndBorderStyle}>{idea.tag}</h3>
                    <h1 style={fontStyle}>{idea.title}</h1>
                </header>
                <section className="header-picture-container">
                    <img src={process.env.PUBLIC_URL + "/images/" + idea.image} alt="header"/> 
                </section>
                <article>
                    {ideaToDisplay}
                </article>
                <section className="author-container">
                    <p>Idee von {idea.author}</p>
                </section>
                <Footer backgroundStyle={backgroundStyle}/>
            </div>
        </div>
    )
}

export default Idea;
