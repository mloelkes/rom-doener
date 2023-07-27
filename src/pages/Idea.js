import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ideasData from "../data/ideasData.json";
import Footer from "../components/Footer.js";
import IdeasRow from "../components/IdeasRow";

function Idea() {
    const { id } = useParams();

    const [idea, setIdea] = useState(undefined);
    
    const randomIdeasList = getRandomIdeas().map(ideasEntry => 
        <IdeasRow ideasEntry={ideasEntry}/>
    )

    function getRandomIdeas() {
        const actualIndex = ideasData.findIndex(ideasEntry => {
            return ideasEntry.id === id;
        })
        const randomIndices = [];
        const randomIdeas = [];

        for (let i = 0; i < 2; i++) {
            let randomIndex;
            
            do {
                randomIndex = Math.floor(Math.random() * ideasData.length)
            } while (randomIndex === actualIndex || randomIndices.includes(randomIndex))

            randomIndices.push(randomIndex)
        }

        for (let randomIndex of randomIndices) {
            randomIdeas.push(ideasData[randomIndex])
        }

        return randomIdeas
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const idea = ideasData.filter(ideasEntry => {
            return ideasEntry.id === id;
        })[0];

        setIdea(idea)
    }, [id])

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
                <header style={backgroundStyle}>
                    <h3>{idea.tag}</h3>
                    <h1>{idea.title}</h1>
                </header>
                <section style={backgroundStyle} className="header-picture-container">
                    <img src={process.env.PUBLIC_URL + "/images/" + idea.image} alt="header"/> 
                </section>
                <article>
                    {ideaToDisplay}
                    <p className="author">Idee von {idea.author}</p>
                </article>
                <section className="random-ideas">
                    {randomIdeasList}
                </section>
            </div>
            <Footer backgroundStyle={backgroundStyle}/>
        </div>
    )
}

export default Idea;
