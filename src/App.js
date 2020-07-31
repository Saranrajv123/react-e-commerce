import React from 'react';
import './App.css';
import "./main.scss"
import {Switch, Route} from "react-router-dom"
import HomePage from "./HomePage/pages/HomePage";
import ShopPage from "./ShopPage/pages/ShopPage";
import Header from "./Header/Header";
import SignInSignUp from "./SignIn/pages/SignInSignUp";

function App() {

    const hats = () => {
        return "HATS"
    }

    return (
        <React.Fragment>
            <div>
                <Header />
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
