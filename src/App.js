import React from 'react';
import './App.css';
import "./main.scss"
import {Switch, Route} from "react-router-dom"
import HomePage from "./HomePage/pages/HomePage";

function App() {

    const hats = () => {
        return "HATS"
    }

    return (
        <React.Fragment>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/hats" component={hats}/>
                </Switch>
            </div>
        </React.Fragment>
    );
}

export default App;
