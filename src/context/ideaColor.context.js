import { createContext, useState } from "react"

const IdeaColorContext = createContext()

function IdeaColorProviderWrapper(props) {
    const [ideaColor, setIdeaColor] = useState(null);

    return (
        <IdeaColorContext.Provider value={{ ideaColor, setIdeaColor }}>
            {props.children}
        </IdeaColorContext.Provider>
    )
}

export { IdeaColorContext, IdeaColorProviderWrapper };
