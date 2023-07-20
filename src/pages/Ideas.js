import React from "react";
import ideasData from "../data/ideasData.json";
import IdeasRow from "../components/IdeasRow.js";
import Footer from "../components/Footer.js"

function Ideas() {

    const ideasList = ideasData.map(ideasEntry => 
        <IdeasRow ideasEntry={ideasEntry}/>
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
