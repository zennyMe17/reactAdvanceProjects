import React from 'react'
import { useNavigate } from 'react-router-dom';


function Labs() {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return ( <div>
        <div>Lab Page</div>
        <button onClick={clickHandler}> About Page</button>
        <button onClick={backHandler}>Go back</button>
    </div> );
}

export default Labs;