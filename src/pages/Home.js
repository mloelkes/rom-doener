import React, { useState } from "react";
import Map from "../components/Map.js";
import Interview from "../components/Interview.js";
import { interviews } from "../data.js";

function Home() {
    const [interviewContent, setInterviewContent] = useState(undefined);
    const [showInterview, setShowInterview] = useState(false);

    function clickMarker(e) {
        console.log(e);
        setInterviewContent(interviews[0]);
        setShowInterview(true);
    }

    function clickMap() {
        setShowInterview(false);
    }

    return (
        <div className="Home">
            <Map clickMarker={clickMarker} clickMap={clickMap}/>
            <Interview interviewContent={interviewContent} showInterview={showInterview}/>
        </div>
    )
}

export default Home;
