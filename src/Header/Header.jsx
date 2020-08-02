import React, {Fragment} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {Auth} from "../Firebase/Firebase"
import "./HeaderStyle.scss"
import {currentUser} from "../SignIn/action";
import userEvent from "@testing-library/user-event";

const Header = (props) => {
    console.log(props,currentUser && props.currentUser, "currentUser")
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

const mapStateToProps = ({ userReducer }) => {
    console.log(userReducer, "userEvent")
    return {
        currentUser: userReducer.currentUser,
    }
}

export default connect(mapStateToProps) (Header)