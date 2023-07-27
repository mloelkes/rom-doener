import React from 'react';
import { Routes, Route } from "react-router-dom";
import Ideas from './pages/Ideas.js';
import Idea from './pages/Idea.js';
import Discover from './pages/Discover.js';
import Registry from './pages/Registry.js';
import About from './pages/About.js';
import Navigation from "./components/Navigation.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Imprint from "./pages/Imprint.js";
import Error from "./pages/Error.js";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<Ideas/>} />
                <Route path="/rom-doener" element={<Ideas/>} />
                <Route path="/ideas" element={<Ideas/>}/>
                <Route path="/ideas/:id" element={<Idea/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/registry" element={<Registry/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>} />
                <Route path="/imprint" element={<Imprint/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
