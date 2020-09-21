import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";
import Hotel from "./components/Hotel/Hotel";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                    <Route path="/destinations">
                        <Home />
                    </Route>
                    <PrivateRoute path="/hotel/:destinationName">
                        <Hotel />
                    </PrivateRoute>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
