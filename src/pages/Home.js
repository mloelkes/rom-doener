import React, { useState, useEffect } from "react";
import Map from "../components/Map.js";
import Interviews from "../components/Interviews.js";
import Karte from "../components/Karte.js";
import Register from "../components/Register.js";
import Ueber from "../components/Ueber.js";
import { interviews } from "../data.js";

function Home(props) {
    const [showInterviews, setShowInterviews] = useState(false);
    const [showKarte, setShowKarte] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showUeber, setShowUeber] = useState(false);

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

    useEffect(() => {
        setShowInterviews(props.showInterviews);
    }, [props.showInterviews])

    useEffect(() => {
        setShowKarte(props.showKarte);
    }, [props.showKarte])

    useEffect(() => {
        setShowRegister(props.showRegister);
    }, [props.showRegister])

    useEffect(() => {
        setShowUeber(props.showUeber);
    }, [props.showUeber])

    return (
        <div className="Home">
            <Map clickMarker={clickMarker} clickMap={clickMap}/>
            {showInterviews && <Interviews/>}
            {showKarte && <Karte interviewContent={interviewContent} showInterviewContent={showInterviewContent}/>}
            {showRegister && <Register/>}
            {showUeber && <Ueber/>}
        </div>
    )
}

export default Home;
