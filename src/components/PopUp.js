import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef } from 'react';
import mapboxgl from "mapbox-gl";

function PopUp({popUpContent}) {

    const popUpStyle = {
        backgroundColor: popUpContent?.color
    }

    useEffect(() => {


    }, [])


    return (
        <div style={popUpStyle} className="PopUp">
            <p className="snippet">„{popUpContent?.snippet}“</p>
            <Link className="link" to={`/interviews/${popUpContent.id}`}>{popUpContent.tag}</Link>
        </div>
    )
}

export default PopUp;
