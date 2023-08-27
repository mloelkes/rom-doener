import { Link } from "react-router-dom";

function PopUpContent({ ideaData }) {

    return (
        <div className="PopUpContent" style={{ backgroundColor: ideaData.color }}>
            <p className="snippet">„{ideaData.snippet}“</p>
            <Link className="link" to={`/ideas/${ideaData.id}`}>{ideaData.title}</Link>
        </div>
    )
}

export default PopUpContent;
