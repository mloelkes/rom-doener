import { Link } from "react-router-dom";

function IdeasRow({ideasEntry}) {
    return (
        <div className="IdeasRow" style={{ backgroundColor: ideasEntry?.color }}>
            <Link to={`/ideas/${ideasEntry.id}`} className="link">
                <h3 className="tag">{ideasEntry?.tag}</h3>
                <p className="title">{ideasEntry?.title}</p>
            </Link>
        </div>
    )
}

export default IdeasRow;
