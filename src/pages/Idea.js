import { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ideasData from "../data/ideasData.json";
import Footer from "../components/Footer.js";
import IdeasRow from "../components/IdeasRow";
import parse from "html-react-parser";
import { IdeaColorContext } from "../context/ideaColor.context.js";

function Idea() {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const registryId = searchParams.get("registry-id");

    const { setIdeaColor, setShowColor } = useContext(IdeaColorContext);

    const [idea, setIdea] = useState(undefined);
    const [imageLoaded, setImageLoaded] = useState(false);
    
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
        setImageLoaded(false);

        const idea = ideasData.filter(ideasEntry => {
            return ideasEntry.id === id;
        })[0];

        setIdea(idea);
        setIdeaColor(idea.color);
        setShowColor(true);

        window.scrollTo(0, 0);

        return () => setShowColor(false);
    }, [id])

    useEffect(() => {
        if (registryId) {
            const spans = document.querySelectorAll(`.${registryId}`)
            if (spans.length > 0) {
                spans.forEach(span => {
                    span.style.backgroundColor = idea?.color;
                })

                if (imageLoaded) scrollToElement(spans[0]);
            }
        }
    }, [imageLoaded])

    function scrollToElement(el) {
        const y = el.getBoundingClientRect().top - (window.innerHeight / 3);
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    const backgroundStyle = {
        backgroundColor: idea?.color
    }
    const highlightLineStyle = {
        borderColor: idea?.color
    }

    const ideaToDisplay = idea?.text.map((textEntry, i) => {
        if (textEntry.type === "intro") return <p key={i} className="intro">{parse(textEntry.paragraph)}</p>
        else if (textEntry.type === "highlight") {
            return <>
                <div style={highlightLineStyle} className="highlight-line"></div>
                <p key={i} className="highlight">{parse(textEntry.paragraph)}</p>
            </>
        }
        else return <p key={i} >{parse(textEntry.paragraph)}</p>
    })

    return (
        <div className="Idea">
            <div className="container">
                <header style={backgroundStyle}>
                    <h3 className="tag">{idea?.tag}</h3>
                    <h1>{idea?.title}</h1>
                </header>
                <section style={backgroundStyle} className="header-picture-container">
                    <img src={process.env.PUBLIC_URL + "/images/" + idea?.image} style={ imageLoaded ? { } : { display: "none" } } onLoad={() => setImageLoaded(true)} alt="header"/>
                    <div className="loaderContainer" style={ imageLoaded ? { display: "none" } : { } }>
                        <div className="loader"></div>
                    </div>
                </section>
                <article>
                    {ideaToDisplay}
                    <p className="author">Idee von {idea?.author}</p>
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
