import React, {Fragment, useState} from "react";
import {Auth, createUserProfileDocument} from "../../../Firebase/Firebase"
import FormInput from "../../../CommonUtils/FromInput/FormInput";
import CustomButton from "../../../CommonUtils/CustomButton/CustomButton";

const SignUp = () => {

    const [userState, setUserState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (userState.password !== userState.confirmPassword) {
            alert("password does not match")
            return
        }

        try {
            const {user} = await Auth.createUserWithEmailAndPassword(userState.email, userState.password)
            await createUserProfileDocument(user, userState.name)

            // setUserState("")
        } catch(err) {
            console.log(err.message, "err")
        }

    }

    return (
        <Fragment>
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        name="Name"
                        value={userState.name}
                        label="Display Name"
                        required
                        handleChange={(e) => setUserState({...userState, name: e.target.value})}
                    />

                    <FormInput
                        type="email"
                        name="Email"
                        value={userState.email}
                        label="Email"
                        required
                        handleChange={(e) => setUserState({...userState, email: e.target.value })}
                    />

                    <FormInput
                        type="password"
                        name="Password"
                        value={userState.password}
                        label="Password"
                        required
                        handleChange={(e) => setUserState({...userState, password: e.target.value})}
                    />

                    <FormInput
                        type="password"
                        name="Confirm Password"
                        value={userState.confirmPassword}
                        label="Confirm Password"
                        required
                        handleChange={(e) => setUserState({...userState, confirmPassword: e.target.value})}
                    />

                    <CustomButton type={"submit"}>Sign up</CustomButton>
                </form>
            </div>
        </Fragment>

    )
}

export default SignUp