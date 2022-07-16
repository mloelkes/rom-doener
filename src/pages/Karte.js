import { useState, useEffect } from "react";
import timm from "../assets/images/timm.png";

function Karte(props) {

    const [interviewContent, setInterviewContent] = useState(undefined);
    const [showInterviewContent, setShowInterviewContent] = useState(true);

    useEffect(() => {
        setInterviewContent(props.interviewContent)
    }, [props.interviewContent])

    // useEffect(() => {
    //     setShowInterviewContent(props.showInterviewContent);
    // }, [props.showInterviewContent])

    return (
        <div className="Karte">
            <div className="container">
                {/* <div style={{ backgroundColor: interviewContent?.color }} className={showInterviewContent ? "content visible" : "content invisible"}></div> */}
                <div className={showInterviewContent ? "content visible" : "content invisible"}>
                    <div className="header">
                        <h3>{interviewContent?.tag}</h3>
                        <h1>{interviewContent?.title}</h1>
                        <h2>{interviewContent?.subtitle}</h2>
                    </div>
                    <div className="picture">
                        <img src={timm}/>
                    </div>
                        <p className="foto-info">Von links nach rechts: Hannes A., Berta B., Cäsar C. und Doris D. Foto: Hannes Meyer.</p>
                        <p className="intro">{interviewContent?.intro}</p>
                    <div className="body">
                        {interviewContent?.interview.map((text, i) => (
                            (i % 2 === 0) ?
                            <p className="question" key={i}>{text}</p>
                            :
                            <p className="answer" key={i}>{text}</p>
                        ))}
                    </div>
                    <div className="date">
                        <p>Berlin, August 2020</p>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        </div>
    )
}

export default Karte;