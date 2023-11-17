import { Link } from "react-router-dom";

function PopUpContent({ ideaData }) {

    return (
        <div className="PopUpContent" style={{ backgroundColor: ideaData.color }}>
            <Link className="link" to={`/ideas/${ideaData.id}`}>
                <p className="snippet" style={{ color: ideaData.fontColor }}>„{ideaData.snippet}“</p>
                <h2 className="snippet-info" style={{ color: ideaData.fontColor }}>{ideaData.title}</h2>
            </Link>
        </div>
    )
}

export default PopUpContent;
