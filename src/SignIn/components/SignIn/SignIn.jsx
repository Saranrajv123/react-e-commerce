import React, {Fragment, useState} from "react";
import FormInput from "../../../CommonUtils/FromInput/FormInput";
import "./SignIn.scss"
import CustomButton from "../../../CommonUtils/CustomButton/CustomButton";
import {signInWithGoogle} from "../../../Firebase/Firebase";

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const formSubmit = (event) => {
        event.preventDefault()
        setEmail("")
        setPassword("")
    }


    return (
        <Fragment>
            <div className="sign-in">
                <form onSubmit={formSubmit}>
                    <FormInput
                        type="text"
                        name={email}
                        value={email}
                        handleChange={(event) => setEmail(event.target.value)}
                        label="Email"
                    />

                    <FormInput
                        type="text"
                        name={password}
                        value={password}
                        handleChange={(event) => setPassword(event.target.value)}
                        label="Password"
                    />

                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign in with Google</CustomButton>
                    {/*<input type="text" name={email} value={email} onChange={(event) => setEmail(event.target.value)}/>*/}
                    {/*<input type="text" name={password} value={password} onChange={(event) => setPassword(event.target.password)}/>*/}
                    {/*<button>Submit</button>*/}
                </form>
            </div>
        </Fragment>
    )
}

export default SignIn