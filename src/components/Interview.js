import { useState, useEffect, useRef } from "react";
import { interviews } from "../data.js";
import Map from "./Map.js";

function Interview(props) {

    // const isInitialMount = useRef(true);
    const [interviewContent, setInterviewContent] = useState(undefined);
    const [showInterview, setShowInterview] = useState(false);

    function clickMarker() {
        setInterviewContent(props.interviewContent)
        setShowInterview(true);
    }

    useEffect(() => {
        if (props.interviewContent) {
            clickMarker();
        }
    }, [props.interviewContent])

    return (
        <div className="Interview">
            <div className="col-1">
                <div className="content"></div>
            </div>
            <div className="col-2">
                {showInterview && <div className="content">
                    <h3>{interviewContent?.tag}</h3>
                    <h1>{interviewContent?.title}</h1>
                    <h2>{interviewContent?.subtitle}</h2>
                    <p className="intro">{interviewContent?.intro}</p>
                    {interviewContent?.interview.map((text, i) => (
                        i % 2 === 0 ?
                        <p className="question" key={i}>{text}</p>
                        :
                        <p className="answer" key={i}>{text}</p>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Interview;