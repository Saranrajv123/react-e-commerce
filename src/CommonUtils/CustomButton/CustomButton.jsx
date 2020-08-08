import React, { Fragment } from "react"
import "./CustomButton.scss"

const CustomButton = ({ children, inverted, ...props }) => {
    return (
        <Fragment>
          <button className={`${inverted ? "inverted" : ""} "custom-button" `} {...props}>
              {children}
          </button>
        </Fragment>
    )
}

export default CustomButton