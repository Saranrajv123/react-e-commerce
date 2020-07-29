import React from 'react';
import './App.css';
import "./main.scss"
import {Switch, Route} from "react-router-dom"
import HomePage from "./HomePage/pages/HomePage";
import ShopPage from "./ShopPage/pages/ShopPage";

function App() {

    const hats = () => {
        return "HATS"
    }

    return (
        <React.Fragment>
            <div>
                <Switch>
                    <Route exact path="/hats" component={hats}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
