import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import {Auth} from "../Firebase/Firebase"
import "./HeaderStyle.scss"

const Header = (props) => {
    return (
        <Fragment>
            <div className="header">
                <Link to="/" className="logo-container">
                    Logo
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">Shop</Link>
                    <Link className="option" to="/shop">Contact</Link>
                    {
                        props.currentUser ? (
                            <div className="option" onClick={() => Auth.signOut()}> Sign out</div>
                        ) : (
                            <Link className="option" to="/signin">Sign in</Link>
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Header