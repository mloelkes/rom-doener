import React from "react";
import { interviews } from "../data.js";
import InterviewsRow from "../components/InterviewsRow.js";

function Interviews() {

    const interviewsList = Object.keys(interviews).map(key => 
        <InterviewsRow interview={interviews[key]}/>
    )

    return (
        <div className="Interviews">
            <div className="content">
                {interviewsList}
            </div>
        </div>
    )
}

export default Interviews;
