import { Link } from "react-router-dom";
import register from "../data/register.json";

function Register() {

    const registerList = register.map(entry => {
        return ( 
            <span>
                <p className="word">{entry.term}</p>
                {entry.ideen.map(idee => {
                    return (
                        <Link to={`/ideen/${idee.id}`} className="link"><div style={{backgroundColor: idee.color}} className="dot"></div></Link>
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
