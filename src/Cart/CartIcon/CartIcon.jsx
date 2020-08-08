import React, { Fragment } from "react";
import {connect} from "react-redux"
import * as actions from "../action"

import {ReactComponent as ShoppingIcon} from "../../asserts/11.2 shopping-bag.svg.svg"
import "./CartIcon.scss"

const CartIcon = (props) => {
    return (
        <Fragment>
            <div className={"cart-icon"} onClick={props.toggleCardHidden}>
                <ShoppingIcon className={"shopping-icon"} />
                <span className="item-count">0</span>
            </div>
        </Fragment>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCardHidden: () => dispatch(actions.cartDropdown())
    }
}

export default connect(null,mapDispatchToProps) (CartIcon)