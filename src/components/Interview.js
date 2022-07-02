import { useState, useEffect } from "react";

function Interview(props) {

    const [interviewContent, setInterviewContent] = useState(undefined);
    const [showInterview, setShowInterview] = useState(false);

    useEffect(() => {
        setInterviewContent(props.interviewContent)
    }, [props.interviewContent])

    useEffect(() => {
        setShowInterview(props.showInterview);
    }, [props.showInterview])

    return (
        <div className="Interview">
            <div className="col-1">
                <div className="content">
                </div>
            </div>
            <div className="col-2">
                <div className={showInterview ? "content visible" : "content invisible"}>
                    <h3>{interviewContent?.tag}</h3>
                    <h1>{interviewContent?.title}</h1>
                    <h2>{interviewContent?.subtitle}</h2>
                    <p className="intro">{interviewContent?.intro}</p>
                    {interviewContent?.interview.map((text, i) => (
                        (i % 2 === 0) ?
                        <p className="question" key={i}>{text}</p>
                        :
                        <p className="answer" key={i}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Interview;