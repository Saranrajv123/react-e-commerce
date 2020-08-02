import React, {Fragment, useState, useEffect} from 'react';
import {connect} from "react-redux"
import './App.css';
import "./main.scss"
import {Switch, Route} from "react-router-dom"
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
        const {currentUser} = props
        // Auth.onAuthStateChanged(user => setCurrentUser(user))
        unsubscribeFromAuth = Auth.onAuthStateChanged(async user => {
            if (user) {
                let userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    currentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
                    // currentUser(userRef)
            } else {
                // setCurrentUser(user)
                currentUser(user)
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
                    <Route exact path="/signin" component={SignInSignUp}/>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentUser: (user) => dispatch(actions.currentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(App);
