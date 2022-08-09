import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Interviews from './pages/Interviews.js';
import Interview from './pages/Interview.js';
import Karte from './pages/Karte.js';
import Register from './pages/Register.js';
import Ueber from './pages/Ueber.js';
import Map from "./components/Map.js";
import Navigation from "./components/Navigation.js";
import { interviews } from "./data.js";


function App() {
    const [interviewContent, setInterviewContent] = useState(interviews["timmulrichs"]);
    const [showInterviewContent, setShowInterviewContent] = useState(true);

    function clickMarker(e) {
        const id = e.target.id;

        setInterviewContent(interviews[id]);
        setShowInterviewContent(true);
    }

    function clickMap() {
        setShowInterviewContent(false);
    }

    return (
        <div className="App">
            <Navigation></Navigation>
            {/* <Map clickMarker={clickMarker} clickMap={clickMap}/> */}
            <Routes>
                {/* <Route path="/frankfurt-interviews" element={<Home showInterviews={showInterviews} showKarte={showKarte} showRegister={showRegister} showUeber={showUeber}/>} /> */}
                <Route path="/frankfurt-interviews" element={<Karte interviewContent={interviewContent} showInterviewContent={showInterviewContent}/>}/>
                <Route path="/interviews" element={<Interviews/>}/>
                <Route path="/interviews/:id" element={<Interview/>}/>
                <Route path="/karte" element={<Karte interviewContent={interviewContent} showInterviewContent={showInterviewContent}/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/ueber" element={<Ueber/>}/>
            </Routes>
        </div>
    );
}

export default App;
