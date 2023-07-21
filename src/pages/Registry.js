import { Link } from "react-router-dom";
import registryData from "../data/registryData.json";
import Footer from "../components/Footer";

function Registry() {

    const registryList = registryData
    .sort((a, b) => {
        return a.term.localeCompare(b.term)
    })
    .map(registryEntry => {
        return ( 
            <span>
                <p className="word">{registryEntry.term}</p>
                {registryEntry.ideas.map(idea => {
                    return (
                        <Link to={`/ideas/${idea.id}`} className="link"><div style={{backgroundColor: idea.color}} className="dot"></div></Link>
                    )
                })
                }
            </span>
        )
    })

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
