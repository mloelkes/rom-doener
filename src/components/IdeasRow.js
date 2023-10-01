import { Link } from "react-router-dom";

function IdeasRow({ideasEntry}) {

    return (
        <Link to={`/ideas/${ideasEntry.id}`} className="IdeasRow" style={{ backgroundColor: ideasEntry?.color }}>
            <h3 className="tag">{ideasEntry?.tag}</h3>
            <p className="title">{ideasEntry?.title}</p>
        </Link>
    )
}

export default IdeasRow;
