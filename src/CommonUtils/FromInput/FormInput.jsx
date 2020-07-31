import React, {Fragment} from "react";
import "./FormInput.scss"

const FormInput = (props) => {
    console.log(props.handleChange, "props")
    return (
        <Fragment>
            <div className="group">
                <input
                    className="form-input"
                    {...props}
                    onChange={props.handleChange}
                />
                {
                    props.label ?
                        (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{props.label}</label>)
                        : null
                }
            </div>
        </Fragment>
    )
}

export default FormInput