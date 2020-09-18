import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/destination/:destinationName">
                    <DestinationDetails />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
