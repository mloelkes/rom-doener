import React, { useState } from "react";
import Map from "../components/Map.js";
import Interview from "../components/Interview.js";
import { interviews } from "../data.js";

function Home() {
    const [interviewContent, setInterviewContent] = useState(undefined);

    function clickMarker() {
        setInterviewContent(interviews[0]);
    }

    return (
        <div className="Home">
            <Map clickMarker={clickMarker}/>
            <Interview interviewContent={interviewContent}/>
        </div>
    )
}

export default Home;
