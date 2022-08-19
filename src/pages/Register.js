import { Link } from "react-router-dom";
import { register } from "../data.js";

function Register() {

    const registerList = register.map(entry => {
        return ( 
            <span>
                <p className="word">{entry.term}</p>
                {entry.interviews.map(interview => {
                    return (
                        <Link to={`/interviews/${interview.id}`} className="link"><div style={{backgroundColor: interview.color}} className="dot"></div></Link>
                    )
                })
                }
            </span>
        )
    })

    return (
        <div className="Register">
            <div className="content">
                {registerList}
            </div>
        </div>
    )
}

export default Register;
