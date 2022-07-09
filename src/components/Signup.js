import React from 'react';
import { Link} from "react-router-dom";
import './Signup.css';

function Signup () {
    return(
        <Link to='signup'>
            <button className="btn">Sign In/ Register</button>
        </Link>
    )
}

export default Signup;