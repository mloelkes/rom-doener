import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function PopUp({popUpContent, clickedMarkerPosition}) {

    const [popUpPosition, setPopUpPosition] = useState({});

    useEffect(() => {
        const y = clickedMarkerPosition.y;
        const x = clickedMarkerPosition.x;

        setPopUpPosition({x, y})
    }, [])

    const popUpStyle = {
        backgroundColor: popUpContent?.color,
        top: popUpPosition.y,
        left: popUpPosition.x
    }

    return (
        <div style={popUpStyle} className="PopUp">
            <p className="snippet">„{popUpContent?.snippet}“</p>
            <Link className="link" to={`/ideas/${popUpContent.id}`}>{popUpContent.title}</Link>
        </div>
    )
}

export default PopUp;
