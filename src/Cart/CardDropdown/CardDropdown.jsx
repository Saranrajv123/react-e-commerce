import React, { Fragment } from "react";
import CustomButton from "../../CommonUtils/CustomButton/CustomButton";
import "./CartDropdown.scss"

const CartDropdown = () => {
    return (
        <Fragment>
            <div className={"cart-dropdown"}>
                <div className="cart-items">
                    <CustomButton>Go to Checkout</CustomButton>
                </div>
            </div>
        </Fragment>
    )
}

export default CartDropdown