import React from "react";
import {Link} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return(
        <>
            <div className="nav">
                <div className="navchild divone">DEW</div>
                <div className="navchild divtwo">
                   <Link className="navlink"  to={"/"}><a >Home</a></Link>
                   <Link className="navlink"  to={"/aboutus"}><a >About us</a></Link>
                   <Link className="navlink"  to={"/contactus"}><a >Contact us</a></Link>
                   <Link className="navlink"  to={"/blog"}><a className="navadd">Add</a></Link>
                </div>

                <div className="navchild divthree">
                    <a>F</a>
                    <a>I</a>
                    <a>T</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;