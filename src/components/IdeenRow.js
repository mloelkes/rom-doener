import { Link } from "react-router-dom";

function IdeenRow({text}) {

    return (
        <div className="IdeenRow" style={{ backgroundColor: text?.color }}>
            <p className="tag">{text?.tag}</p>
            <Link to={`/ideen/${text.id}`} className="title">{text?.title}</Link>
        </div>
    )
}

export default IdeenRow;
