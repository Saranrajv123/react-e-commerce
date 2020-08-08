import React, {Fragment} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {Auth} from "../Firebase/Firebase"
import "./HeaderStyle.scss"
import CartIcon from "../Cart/CartIcon/CartIcon";
import CartDropdown from "../Cart/CardDropdown/CardDropdown";

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
                    <CartIcon />
                </div>
                {
                    props.toggleCartHidden ? null :  <CartDropdown />
                }
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ userReducer, cardReducer }) => {
    return {
        currentUser: userReducer.currentUser,
        toggleCartHidden: cardReducer.hidden
    }
}

export default connect(mapStateToProps) (Header)