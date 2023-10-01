import { Link } from "react-router-dom";

function PopUpContent({ ideaData }) {

    return (
        <div className="PopUpContent" style={{ backgroundColor: ideaData.color, color: ideaData.fontColor }}>
            <p className="snippet">„{ideaData.snippet}“</p>
            <Link className="link" to={`/ideas/${ideaData.id}`} style={{ color: ideaData.fontColor }}>{ideaData.title}</Link>
        </div>
    )
}

export default PopUpContent;
