import React from "react";
import interviews from "../data/interviews.json";
import InterviewsRow from "../components/InterviewsRow.js";

function Interviews() {

    const interviewsList = interviews.map(interview => 
        <InterviewsRow interview={interview}/>
    )

    return (
        <div className="Interviews">
            <div className="container">
                {interviewsList}
            </div>
        </div>
    )
}

export default Interviews;
