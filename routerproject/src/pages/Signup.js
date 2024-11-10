import React from 'react'
import Template from '../components/Template';
function Signup({setLoggedIn}) {

    console.log("Im in signup.js")
    setLoggedIn(true)

    return ( <div>

        <Template
            title="Join the million learning to code with StudyNotion for free"
            desc1="Build skills for today, tommorow, and beyond"
            desc2="Education to future-proof your career"
            image="login"
            formtype="signup"
            setIsLoggedIn={setLoggedIn}
        />

    </div> );
}

export default Signup;