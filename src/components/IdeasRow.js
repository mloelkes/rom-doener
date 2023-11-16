import { Link } from "react-router-dom";

function IdeasRow({ideasEntry}) {
    return (
        <div className="IdeasRow">
            <Link to={`/ideas/${ideasEntry.id}`} className="link" style={{ backgroundColor: ideasEntry?.color }}>
                <h3 className="tag">{ideasEntry?.tag}</h3>
                <p className="title">{ideasEntry?.title}</p>
            </Link>
        </div>
    )
}

export default IdeasRow;
