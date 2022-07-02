import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
