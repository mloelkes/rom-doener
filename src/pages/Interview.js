import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { interviews } from "../data.js";
import timm from "../assets/images/timm.png";
import Footer from "../components/Footer.js";

function Interview() {
    const { id } = useParams();

    const [interview, setInterview] = useState(undefined);

    const interviewToDisplay = interview?.interviewContent.map((text, i) => (
        (i % 2 === 0) ?
        <p className="question" key={i}>{text}</p>
        :
        <p className="answer" key={i}>{text}</p>
    ))

    useEffect(() => {
        setInterview(interviews[id])
    }, [])

    return (
        <div className="Interview">
            <div className="container">
                {/* <div style={{ backgroundColor: interviewContent?.color }} className={showInterviewContent ? "content visible" : "content invisible"}></div> */}
                <header>
                    <h3>{interview?.tag}</h3>
                    <h1>„{interview?.title}“</h1>
                    <h2>{interview?.subtitle}</h2>
                </header>
                <section className="header-picture-container">
                    <img src={timm} alt="header"/>
                </section>
                <section className="intro-container">
                    <p className="picture-description">{interview?.pictureDescription}</p>
                    <p className="intro">{interview?.intro}</p>
                </section>
                <article>
                    {interviewToDisplay}
                    <p className="publishing-date">Berlin, August 2020</p>
                </article>
                <Footer/>
            </div>
        </div>
    )
}

export default Interview;
