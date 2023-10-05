import { Link } from "react-router-dom";
import registryData from "../data/registryData.json";
import ideasData from "../data/ideasData.json";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Registry() {

    const registryList = registryData
    .sort((a, b) => {
        const aTermWithoutThe = a.term.slice(0,3) === "The" ? a.term.slice(4) : a.term;
        const bTermWithoutThe = b.term.slice(0,3) === "The" ? b.term.slice(4) : b.term;

        return aTermWithoutThe.localeCompare(bTermWithoutThe);
    })
    .map(registryEntry => {
        return ( 
            <span key={registryEntry.term}>
                <p className="word">{registryEntry.term}</p>
                {registryEntry.ideas.map(idea => {
                    return (
                        <Link key={idea} to={`/ideas/${idea}?registry-id=${registryEntry.id}`} className="link"><div style={{backgroundColor: getColorForIdea(idea)}} className="dot"></div></Link>
                    )
                })
                }
            </span>
        )
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function getColorForIdea(id) {
        return ideasData.find(ideasEntry => ideasEntry.id === id).color;
    }

    return (
        <div className="Registry">
            <div className="content">
                {registryList}
            </div>
            <Footer />
        </div>
    )
}

export default Registry;
