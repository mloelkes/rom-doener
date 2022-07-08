import React, { useState, useEffect } from "react";
import Map from "../components/Map.js";
import Interview from "../components/Interview.js";
import About from "../components/About.js";
import { interviews } from "../data.js";

function Home(props) {
    const [showInterview, setShowInterview] = useState(true);
    const [showInterviews, setShowInterviews] = useState(false);
    const [showTopics, setShowTopics] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const [interviewContent, setInterviewContent] = useState(undefined);
    const [showInterviewContent, setShowInterviewContent] = useState(false);

    function clickMarker(e) {
        const id = e.target.id;

        setInterviewContent(interviews[id]);
        setShowInterviewContent(true);
    }

    function clickMap() {
        setShowInterviewContent(false);
    }

    return (
        <div className="Home">
            <Map clickMarker={clickMarker} clickMap={clickMap}/>
            {showInterview && <Interview interviewContent={interviewContent} showInterviewContent={showInterviewContent}/>}
            {showAbout && <About/>}
        </div>
    )
}

export default Home;
