import React from "react";
import texts from "../data/texts.json";
import IdeenRow from "../components/IdeenRow.js";

function Ideen() {

    const ideenList = texts.map(text => 
        <IdeenRow text={text}/>
    )

    return (
        <div className="Ideen">
            <div className="container">
                {ideenList}
            </div>
        </div>
    )
}

export default Ideen;
