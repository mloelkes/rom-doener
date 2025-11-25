import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function About() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="About Idea">
            <div className="container">
                <header>
                    <h3 className="tag">Über das Projekt</h3>
                    <h1>Rom/Döner – Ein Ideenprojekt</h1>
                </header>
                <section className="header-picture-container">
                    <video loop autoPlay muted playsInline style={ videoLoaded ? { } : { display: "none" } } onLoadedData={() => setVideoLoaded(true)}>
                        <source src={process.env.PUBLIC_URL + "/images/Cube.mp4"} type="video/mp4"/>
                    </video>
                    <div className="loaderContainer" style={ videoLoaded ? { display: "none" } : { } }>
                        <div className="loader"></div>
                    </div>
                </section>
                <article>
                    <p className="intro">Rom/Döner – kein unbedingt naheliegendes Begriffspaar. Frankfurt-Kennern kommt dabei allerdings sofort eine Assoziation in den Sinn: die U-Bahn-Station Dom/Römer. Vor einigen Jahren wurde sie auf einer ihrer Bahnsteigtafeln tatsächlich so unbenannt – eine künstlerische Intervention im öffentlichen Raum.</p>
                    
                    <p>Nach wenigen Tagen wieder rückgängig gemacht, hat die Umbenennung dennoch ihre Spuren hinterlassen. Einmal auf den Begriffswitz gebracht, denkt man beim Passieren der Station oder Hören ihres Namens mit einem Schmunzeln fortan gern an die Hauptstadt Italiens und das bekannteste Gericht der türkischen Küche.</p>
                    <p>Genau an solchen Verschiebungen der Wahrnehmungen setzt das Projekt Rom/Döner an. Es versammelt Ideen, die Frankfurt im Kleinen verändern wollen. Das Projekt versteht die Mainmetropole dabei als historisch gewachsenen Raum veränderbarer Begebenheiten.</p>
                    
                    <div className="highlight-line"></div>
                    <p className="highlight">Jede der Ideen schafft Bewusstsein, unterhält, erzählt Geschichte(n), verbindet scheinbar Unzusammenhängendes und verschiebt so die Wahrnehmung der Stadt, ohne zugleich Wirklichkeit werden zu müssen. Wenn manche der hier veröffentlichten Ideen eines Tages realisiert werden sollten: Umso besser!</p>
                    
                    <p>Das Projekt versammelt im ersten Schritt mehrere Ideen von Kenneth Hujer, der auch die Idee zum Projekt Rom/Döner hatte. Seine Ideen eröffnen gleichsam das Spannungsfeld des Projekts, unterstreichen das erwünschte out-of-the-box-Denken und wirken bestenfalls inspirierend. Denn es sollen weitere Ideen folgen – von Menschen aus den unterschiedlichsten Tätigkeitsfelder und Kontexten. Wer eigene Ideen einbringen möchte, ist ausdrücklich eingeladen, sie einzureichen.</p>
                    
                    <div className="highlight-line"></div>
                    <p className="highlight">Auf dass das Projekt Rom/Döner zu einem Ideen-Konglomerat anwächst!</p>
                    
                    <p>Die Internetseite des Projekts bietet gleich mehrere Zugänge zu den einzelnen Ideen, denen jeweils eine Farbe zugeordnet ist. Neben einer Überblickseite sind die Ideen auf einer Karte anhand verschiedenfarbiger Punkten eingetragen. Manche Ideen sind mit nur einem, manche mit mehreren Punkten gekennzeichnet – je nachdem ob sie sich auf einen oder mehrere Orte beziehen. Die Punkte können sowohl den Grund der Idee als auch ihren Gegenstand kennzeichnen. Ein Register ermöglicht ferner anhand von Namen, Orten und zentralen Begriffen einen spielerischen Zugang zu den Ideen.</p>
                    <div className="yourIdeaContainer"><a id="yourIdea" href="mailto:kennethhujer@gmail.com">Hier Idee einreichen</a></div>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default About;
