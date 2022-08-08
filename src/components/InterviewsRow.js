import { Link } from "react-router-dom";

function InterviewsRow({interview}) {

    return (
        <div className="InterviewsRow" style={{ backgroundColor: interview?.color }}>
            <p className="tag">{interview?.tag}</p>
            <Link to={`/interviews/${interview.id}`} className="subtitle">{interview?.subtitle}</Link>
        </div>
    )
}

export default InterviewsRow;
