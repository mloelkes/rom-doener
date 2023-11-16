import { createContext, useState } from "react"

const IdeaColorContext = createContext()

function IdeaColorProviderWrapper(props) {
    const [ideaColor, setIdeaColor] = useState("#F6F6F4");
    const [showColor, setShowColor] = useState(false);

    return (
        <IdeaColorContext.Provider value={{ ideaColor, setIdeaColor, showColor, setShowColor }}>
            {props.children}
        </IdeaColorContext.Provider>
    )
}

export { IdeaColorContext, IdeaColorProviderWrapper };
