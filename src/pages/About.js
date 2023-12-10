import { useEffect } from "react";
import Footer from "../components/Footer";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="About">
            <div className="content-page">
                <h1>Das Ideenprojekt „Rom/Döner“</h1>
                <img src={process.env.PUBLIC_URL + "/images/romdoener.jpg"}  alt="about" />
                <p>„Rom/Döner“ – kein unbedingt naheliegendes Begriffspaar. Frankfurterinnen und Frankfurtern kommt dabei allerdings sofort eine Assoziation in den Sinn: die U-Bahn-Station Dom/Römer. Vor einigen Jahren wurde sie auf einer ihrer Bahnsteigtafeln tatsächlich so unbenannt – eine künstlerische Intervention im öffentlichen Raum. Nach wenigen Tagen wieder rückgängig gemacht, hat die Umbenennung dennoch ihre Spuren hinterlassen. Einmal auf den Begriffswitz gebracht, denkt man beim Passieren der Station oder Hören ihres Namens mit einem Schmunzeln fortan gern an die Hauptstadt Italiens und das bekannteste Gericht der türkischen Küche.</p>
                <p>Darum geht es im übertragenen Sinn auch beim Projekt „Rom/Döner“. Es möchte Frankfurt im Kleinen verändern. Das Projekt versteht die Mainmetropole dabei als historisch gewachsenen Raum veränderbarer Begebenheiten. Jede der Ideen schafft Bewusstsein, unterhält, erzählt Geschichte(n), verbindet scheinbar Unzusammenhängendes und verschiebt so die Wahrnehmung der Stadt, ohne zugleich Wirklichkeit werden zu müssen. Wenn manche der hier veröffentlichten Ideen eines Tages realisiert werden sollten: Umso besser!</p>
                <p>Das Projekt versammelt im ersten Schritt mehrere Ideen des freien Autors und Frankfurters Kenneth Hujer, der auch die Idee zum Projekt „Rom/Döner“ hatte. Seine Ideen eröffnen gleichsam das Spannungsfeld des Projekts, unterstreichen das erwünschte out-of-the-box-Denken und wirken bestenfalls inspirierend. Denn es sollen viele weitere Ideen folgen – von Menschen aus den unterschiedlichsten Tätigkeitsfelder und Kontexten. Auf dass das Projekt „Rom/Döner“ zu einem großen Ideen-Konglomerat anwächst!</p>
                <p>Die Internetseite des Projekts bietet gleich mehrere Zugänge zu den einzelnen Ideen, denen jeweils eine Farbe zugeordnet ist. Neben einer Überblickseite sind die Ideen auf einer Karte anhand verschiedenfarbiger Punkten eingetragen. Manche Ideen sind mit nur einem, manche mit mehreren Punkten gekennzeichnet – je nachdem ob sie sich auf einen oder mehrere Orte beziehen. Die Punkte können sowohl den Grund der Idee als auch ihren Gegenstand kennzeichnen. Ein Register ermöglicht ferner anhand von Namen, Orten und zentralen Begriffen einen spielerischen Zugang zu den Ideen.</p>
                <p>Zum Abschluss des Projekts werden alle hier erschienenen Beiträge in einer Publikation zusammengefasst.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;
