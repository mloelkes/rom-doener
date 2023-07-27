
import { useEffect } from "react";
import Footer from "../components/Footer";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="About">
            <div className="content-page">
                <h1>Über das Projekt</h1>
                <p>„Rom/Döner“ – kein unbedingt naheliegendes Begriffspaar. Frankfurterinnen und Frankfurtern kommt dabei allerdings sofort eine Assoziation in den Sinn: die U-Bahn-Station Dom/Römer. Vor einigen Jahren wurde sie auf einer ihrer Bahnsteigtafeln tatsächlich so unbenannt – eine künstlerische Intervention im öffentlichen Raum. Nach wenigen Tagen wieder rückgängig gemacht, hat die Umbenennung dennoch ihre Spuren hinterlassen. Denn einmal auf den Begriffswitz gebracht, denkt man beim Passieren der Station oder Hören ihres Namens mit einem Schmunzeln fortan gern an die Hauptstadt Italiens und das bekannteste Gericht der türkischen Küche.</p>
                <p>Darum geht es im übertragenen Sinn auch beim Projekt „Rom/Döner – Ideen für Frankfurt“. Es möchte Frankfurt im Kleinen verändern. Das Projekt versteht die Mainmetropole dabei als historisch gewachsenen Raum veränderbarer Begebenheiten. Jede der Ideen schafft Bewusstsein, unterhält, erzählt Geschichte(n), verbindet scheinbar Unzusammenhängendes und verschiebt so die Wahrnehmung der Stadt, ohne zugleich Wirklichkeit werden zu müssen. Wenn manche der hier veröffentlichten Ideen eines Tages realisiert werden sollten: Umso besser!</p>
                <p>Das Projekt versammelt im ersten Schritt zehn Ideen des freien Autors und Frankfurters Kenneth Hujer, der auch die Idee zum Projekt „Rom/Döner“ hatte. Daraufhin folgen weitere Ideen von Menschen ganz unterschiedlicher Profession – mit dem Fernziel, aus allen Beiträgen schließlich eine Publikation werden zu lassen. Jede Idee wird zudem eigens illustriert.</p>
                <p>Die Internetseite des Projekts bietet mehrere Zugänge zu den einzelnen Ideen, denen jeweils eine Farbe zugeordnet ist. Neben einer Überblickseite sind die Ideen auf einer Karte anhand verschiedenfarbiger Punkten eingetragen. Manche Ideen sind mit nur einem, manche mit mehreren Punkten gekennzeichnet – je nachdem ob sie sich auf einen oder mehrere Orte beziehen. Die Punkte können sowohl den Grund der Idee als auch ihren Gegenstand kennzeichnen. Ein Register ermöglicht ferner anhand von Namen, Orten und zentralen Begriffen einen Zugang zu den Ideen.</p>
                <p>Ein T-Shirt mit dem Aufdruck des Projektnamens kann über diese Internetseite erworben werden. Es soll an die einleitend erwähnte Umbenennung erinnern und sie weiter in die Welt tragen – und klammheimlich für das vorliegende Ideenprojekt werben.</p>
                <p>Das Projekt wird gefördert von</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;
