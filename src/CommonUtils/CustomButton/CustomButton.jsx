import React, { Fragment } from "react"
import "./CustomButton.scss"

const CustomButton = ({ children, ...props }) => {
    return (
        <Fragment>
          <button className="custom-button" {...props}>
              {children}
          </button>
        </Fragment>
    )
}

export default CustomButton