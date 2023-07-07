import { Link } from "react-router-dom";

function IdeasRow({ideasEntry}) {

    return (
        <div className="IdeasRow" style={{ backgroundColor: ideasEntry?.color }}>
            <p className="tag">{ideasEntry?.tag}</p>
            <Link to={`/ideas/${ideasEntry.id}`} className="title">{ideasEntry?.title}</Link>
        </div>
    )
}

export default IdeasRow;
