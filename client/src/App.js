import React from "react";

import List from "./components/List";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
