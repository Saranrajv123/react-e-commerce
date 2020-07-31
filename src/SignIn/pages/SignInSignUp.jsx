import React, {Fragment} from "react";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import "./SignInSignUp.scss"

const SignInSignUp = () => {
    return (
        <Fragment>
            <div className={"sign-in-and-sign-up"}>
                <SignIn />
                <SignUp />
            </div>
        </Fragment>
    )
}

export default SignInSignUp