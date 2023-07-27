import { Link } from "react-router-dom";
import React from 'react';

function PopUp({popUpContent}) {

    const popUpStyle = {
        backgroundColor: popUpContent?.color
    }

    return (
        <div style={popUpStyle} className="PopUp">
            <p className="snippet">„{popUpContent?.snippet}“</p>
            <Link className="link" to={`/ideas/${popUpContent.id}`}>{popUpContent.title}</Link>
            {/* <p className="name">{popUpContent.subtitle}</p> */}
            {/* <Link className="link" to={`/interviews/${popUpContent.id}`}>{popUpContent.tag}</Link> */}
        </div>
    )
}

export default PopUp;