import React, { Fragment } from "react";

import {ReactComponent as ShoppingIcon} from "../../asserts/11.2 shopping-bag.svg.svg"
import "./CartIcon.scss"

const CartIcon = () => {
    return (
        <Fragment>
            <div className={"cart-icon"}>
                <ShoppingIcon className={"shopping-icon"} />
                <span className="item-count">0</span>
            </div>
        </Fragment>

    )
}

export default CartIcon