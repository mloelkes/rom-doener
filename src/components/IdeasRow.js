import { Link } from "react-router-dom";

function IdeasRow({ideasEntry}) {

    return (
        <div className="IdeasRow" style={{ backgroundColor: ideasEntry?.color }}>
            <h3 className="tag">{ideasEntry?.tag}</h3>
            <Link to={`/ideas/${ideasEntry.id}`} className="title">{ideasEntry?.title}</Link>
        </div>
    )
}

export default IdeasRow;
