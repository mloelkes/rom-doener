import React from 'react';
import { Routes, Route } from "react-router-dom";
import Ideen from './pages/Ideen.js';
import Idee from './pages/Idee.js';
import Discover from './pages/Discover.js';
import Register from './pages/Register.js';
import About from './pages/About.js';
import Navigation from "./components/Navigation.js";


function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<Ideen/>} />
                <Route path="/ideen" element={<Ideen/>}/>
                <Route path="/ideen/:id" element={<Idee/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
