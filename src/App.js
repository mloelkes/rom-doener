import React from 'react';
import { Routes, Route } from "react-router-dom";
import Interviews from './pages/Interviews.js';
import Interview from './pages/Interview.js';
import Discover from './pages/Discover.js';
import Register from './pages/Register.js';
import Ueber from './pages/Ueber.js';
import Navigation from "./components/Navigation.js";


function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            {/* <Map clickMarker={clickMarker} clickMap={clickMap}/> */}
            <Routes>
                <Route path="/frankfurt-interviews" element={<Interviews/>} />
                <Route path="/interviews" element={<Interviews/>}/>
                <Route path="/interviews/:id" element={<Interview/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/ueber" element={<Ueber/>}/>
            </Routes>
        </div>
    );
}

export default App;
