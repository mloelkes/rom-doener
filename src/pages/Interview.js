import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import interviews from "../data/interviews.json";
import timm from "../assets/images/timm.png";
import Footer from "../components/Footer.js";

function Interview() {
    const { id } = useParams();

    const [interview, setInterview] = useState(undefined);

    const fontAndBorderStyle = {
        color: interview?.color,
        border: `3px solid ${interview?.color}`
    }

    const fontStyle = {
        color: interview?.color
    }

    const backgroundStyle = {
        backgroundColor: interview?.color
    }

    const interviewToDisplay = interview?.interviewContent.map((text, i) => (
        (i % 2 === 0) ?
        <p style={fontStyle} className="question" key={i}>{text}</p>
        :
        <p className="answer" key={i}>{text}</p>
    ))

    useEffect(() => {
        const interview = interviews.filter(interview => {
            return interview.id === id
        })[0];

        setInterview(interview)
    }, [])

    return (
        <div className="Interview">
            <div className="container">
                <header>
                    <h3 style={fontAndBorderStyle}>{interview?.tag}</h3>
                    <h1 style={fontStyle}>„{interview?.title}“</h1>
                    <h2 style={fontStyle}>{interview?.subtitle}</h2>
                </header>
                <section className="header-picture-container">
                    <img src={timm} alt="header"/>
                </section>
                <section style={backgroundStyle} className="intro-container">
                    <p className="picture-description">{interview?.pictureDescription}</p>
                    <p className="intro">{interview?.intro}</p>
                </section>
                <article>
                    {interviewToDisplay}
                    <p className="publishing-date">Berlin, August 2020</p>
                </article>
                <Footer backgroundStyle={backgroundStyle}/>
            </div>
        </div>
    )
}

export default Interview;
