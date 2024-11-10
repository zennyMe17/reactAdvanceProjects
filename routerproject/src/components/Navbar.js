import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;
    return ( 
    <div className='flex justify-evenly'>

        <Link to="/">
            <img src="" alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex ml-5 mr-3 gap-3'>
                {!isLoggedIn && <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>}
                
                {!isLoggedIn && <Link to="/signup">
                    <button>
                        Signup
                    </button>
                </Link>}
                
                {isLoggedIn && <Link to="/">
                    <button onClick={()=>{
                        setLoggedIn(false);
                        // toast.success("Logged Out")
                    }}>
                        Logout
                    </button>
                </Link>}
                
                {isLoggedIn &&<Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>}
            
        </div>

    </div>
 );

}

export default Navbar;