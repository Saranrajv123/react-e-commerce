import React, {Fragment, useState, useEffect} from 'react';
import {connect} from "react-redux"
import './App.css';
import "./main.scss"
import {Switch, Route, Redirect} from "react-router-dom"
import HomePage from "./HomePage/pages/HomePage";
import ShopPage from "./ShopPage/pages/ShopPage";
import Header from "./Header/Header";
import SignInSignUp from "./SignIn/pages/SignInSignUp";
import {Auth, createUserProfileDocument} from "./Firebase/Firebase"
import * as actions from "./SignIn/action"

function App(props) {
    const [currentUser, setCurrentUser] = useState(null)
    let unsubscribeFromAuth = null

    useEffect(() => {
        // Auth.onAuthStateChanged(user => setCurrentUser(user))
        unsubscribeFromAuth = Auth.onAuthStateChanged(async user => {
            if (user) {
                let userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    props.currentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                // setCurrentUser(user)
                console.log(user, "user from app")
                props.currentUser(user)
            }
        })
    }, [unsubscribeFromAuth])

    const hats = () => {
        return "HATS"
    }

    return (
        <React.Fragment>
            <div>
                <Header
                    // currentUser={currentUser}
                />
                <Switch>
                    <Route exact path="/hats" component={hats}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin"
                           render={() => props.getCurrentUser ? (<Redirect to={"/"}/>) : (<SignInSignUp/>)}/>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = ({userReducer}) => ({
    getCurrentUser: userReducer.currentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: (user) => dispatch(actions.currentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
