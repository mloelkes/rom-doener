import React, { useState, useEffect } from "react";
import { interviews } from "../data.js";

function Interviews() {
    function clickShowInterview(e) {
        e.preventDefault();
    }

    return (
        <div className="Interviews">
            <div className="content">
                {Object.keys(interviews).map(key => (
                    <div className="row" style={{ backgroundColor: interviews[key]?.color }}>
                            <p className="tag">{interviews[key]?.tag}</p>
                            <p className="subtitle">{interviews[key]?.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Interviews;
