import React from "react";
import ReactDOM from "react-dom";
import ReactContainer from "./ReactContainer";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home} from "./component/home";
import {About} from "./component/about";
import {Hook} from "./component/hook";
import "./style.css";

const ReactApp = ()=>{

    return (
        <Router>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/previous_app">Previous React app</Link>
                    </li>
                    <li>
                        <Link to="/">Using React hooks</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/previous_app" component={ReactContainer}></Route>
                    <Route exact path="/" component={Hook}></Route>
                </Switch>

            </div>
        </Router>
    )
}

ReactDOM.render(
    <ReactApp/>, document.getElementById("app")
)