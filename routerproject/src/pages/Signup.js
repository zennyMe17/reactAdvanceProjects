import React from 'react'
import Template from '../components/Template';
function Signup({setLoggedIn}) {

    

    return ( <div>

        <Template
            title="Join the million learning to code with StudyNotion for free"
            desc1="Build skills for today, tommorow, and beyond"
            desc2="Education to future-proof your career"
            image="login"
            formtype="signup"
            setLoggedIn={setLoggedIn}
        />

    </div> );
}

export default Signup;