import React from 'react';

function Navigation(props) {
    function clickShowInterviews(e) {
        e.preventDefault();
        props.clickShowInterviews();
    }

    function clickShowKarte(e) {
        e.preventDefault();
        props.clickShowKarte();
    }

    function clickShowRegister(e) {
        e.preventDefault();
        props.clickShowRegister();
    }

    function clickShowUeber(e) {
        e.preventDefault();
        props.clickShowUeber();
    }

    return (
        <div className="Navigation">
            <div className="links">
                <button onClick={clickShowInterviews}>Interviews</button>
                <button onClick={clickShowKarte}>Karte</button>
                <button onClick={clickShowRegister}>Register</button>
                <button onClick={clickShowUeber}>Über</button>
            </div>

            <p>Frankfurt Interviews</p>
        </div>
    )
}

export default Navigation;
