import React, { useEffect } from "react";
import ideasData from "../data/ideasData.json";
import IdeasRow from "../components/IdeasRow.js";
import Footer from "../components/Footer.js"

function Ideas() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const ideasList = ideasData.map(ideasEntry => 
        <IdeasRow key={ideasEntry.id} ideasEntry={ideasEntry}/>
    )

    return (
        <div className="Ideas">
            <div className="container">
                {ideasList}
            </div>
            <Footer />
        </div>
    )
}

export default Ideas;
