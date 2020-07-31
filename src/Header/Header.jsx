import React, {Fragment} from "react";
import {Link} from "react-router-dom"
import "./HeaderStyle.scss"

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <Link to="/" className="logo-container">
                    Logo
                </Link>

                <div className="options">
                    <Link className="option" to="/shop">Shop</Link>
                    <Link className="option" to="/shop">Contact</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Header