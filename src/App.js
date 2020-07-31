import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import "./main.scss"
import {Switch, Route} from "react-router-dom"
import HomePage from "./HomePage/pages/HomePage";
import ShopPage from "./ShopPage/pages/ShopPage";
import Header from "./Header/Header";
import SignInSignUp from "./SignIn/pages/SignInSignUp";
import { Auth, createUserProfileDocument } from "./Firebase/Firebase"

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    let unsubscribeFromAuth = null

    useEffect(() => {
        // Auth.onAuthStateChanged(user => setCurrentUser(user))
        unsubscribeFromAuth = Auth.onAuthStateChanged(async user => {
            if(user) {
                let userRef = await createUserProfileDocument(user)

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(user)
            }
        })
        console.log(currentUser, "currentUser")
    }, [unsubscribeFromAuth])

    const hats = () => {
        return "HATS"
    }

    return (
        <React.Fragment>
            <div>
                <Header
                    currentUser={currentUser}
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

export default App;
