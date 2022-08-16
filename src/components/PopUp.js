import { Link } from "react-router-dom";

function PopUp({interview}) {
    const popUpStyle = {
        backgroundColor: interview.color
    }


    return (
        <div style={popUpStyle} className="PopUp">
            <p>{interview.snippet}</p>
            {/* <Link to="/interviews">safdsafd</Link> */}
        </div>
    )
}

export default PopUp;
