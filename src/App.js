import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Home from "./pages/Home.js";

function App() {
    const [showInterviews, setShowInterviews] = useState(false);
    const [showKarte, setShowKarte] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [showUeber, setShowUeber] = useState(false);

    function clickShowInterviews() {
        setShowKarte(false);
        setShowRegister(false);
        setShowUeber(false);
        setShowInterviews(true);
    }

    function clickShowKarte() {
        setShowInterviews(false);
        setShowRegister(false);
        setShowUeber(false);
        setShowKarte(true);
    }

    function clickShowRegister() {
        setShowInterviews(false);
        setShowKarte(false);
        setShowUeber(false);
        setShowRegister(true);
    }

    function clickShowUeber() {
        setShowInterviews(false);
        setShowKarte(false);
        setShowRegister(false);
        setShowUeber(true);
    }

    return (
        <div className="App">
            <Navigation clickShowInterviews={clickShowInterviews} clickShowKarte={clickShowKarte} clickShowRegister={clickShowRegister} clickShowUeber={clickShowUeber}></Navigation>
            <Routes>
                <Route path="/frankfurt-interviews" element={<Home showInterviews={showInterviews} showKarte={showKarte} showRegister={showRegister} showUeber={showUeber}/>} />
            </Routes>
        </div>
    );
}

export default App;
