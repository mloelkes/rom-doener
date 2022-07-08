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
                    <button onClick={clickShowInterview} style={{ color: interviews[key]?.color }} key={interviews[key].id}>
                        <span>{interviews[key]?.person}: </span>
                        <span>{interviews[key]?.title}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Interviews;
