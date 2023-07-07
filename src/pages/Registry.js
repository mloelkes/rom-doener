import { Link } from "react-router-dom";
import registryData from "../data/registryData.json";

function Registry() {

    const registryList = registryData.map(registryEntry => {
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
        </div>
    )
}

export default Registry;
