import React from 'react';
import { Routes, Route } from "react-router-dom";
import Ideas from './pages/Ideas.js';
import Idea from './pages/Idea.js';
import Discover from './pages/Discover.js';
import Registry from './pages/Registry.js';
import About from './pages/About.js';
import Navigation from "./components/Navigation.js";


function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<Ideas/>} />
                <Route path="/ideas" element={<Ideas/>}/>
                <Route path="/ideas/:id" element={<Idea/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/registry" element={<Registry/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
