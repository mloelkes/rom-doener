import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import interviews from "../data/interviews.json";
import Footer from "../components/Footer.js";

function Interview() {
    const { id } = useParams();

    const [interview, setInterview] = useState(undefined);

    const fontAndBorderStyle = {
        color: interview?.color,
        border: `3px solid ${interview?.color}`
    }

    const fontStyleColor = {
        color: interview?.color
    }

    const fontStyleDefault = {
        color: "#000"
    }

    const backgroundStyle = {
        backgroundColor: interview?.color
    }

    const interviewToDisplay = interview?.interviewContent.map((text, i) => {
        const image = getImageByPosition(i);
        const isQuestion = i % 2 === 0;
 
        return <>
            <p style={isQuestion ? fontStyleColor : fontStyleDefault} className={isQuestion ? "question" : "answer"} key={i}>{text}</p>
            {image && 
            <div style={getStyleForInsideContentImage(image.align)} className="inside-content-image-container">
                <img src={image.url} alt="inside-content" className="inside-content-image"/>
                <p>{image.description}</p>
            </div>}
        </>
    })

    useEffect(() => {
        const interview = interviews.filter(interview => {
            return interview.id === id;
        })[0];

        setInterview(interview)
    }, [])

    function getImageByPosition(position) {
        return interview?.images.filter(image => {
            return image.position === position;
        })[0]
    }

    function getStyleForInsideContentImage(align) {
        if (align === "left") {
            return { float: "left", "margin-right": "30px" }
        }

        if (align === "right") {
            return { float: "right", "margin-left": "30px" }
        }

        return {
            width: "100%"
        }
    }

    const heroImage = getImageByPosition("header");

    return (
        <div className="Interview">
            <div className="container">
                <header>
                    <h3 style={fontAndBorderStyle}>{interview?.tag}</h3>
                    <h1 style={fontStyleColor}>„{interview?.title}“</h1>
                    <h2 style={fontStyleColor}>{interview?.subtitle}</h2>
                </header>
                <section className="header-picture-container">
                    <img src={heroImage?.url} alt="header"/> 
                </section>
                <section style={backgroundStyle} className="intro-container">
                    <p className="picture-description">{heroImage?.description}</p>
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
