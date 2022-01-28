import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import About from './components/Pages/About'
import Navbar from "./components/layout/Navbar";
import User from "./components/Users/User";
import { Alert } from "./components/layout/Alert";
import Home from './components/Pages/Home'
import GithubState from './Context/github/GithubState'
import AlertState from './Context/alert/AlertState';
import NotFound from './components/Pages/NotFound'

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App" >

            <Navbar title="Github Finder" icon="fab fa-github"></Navbar>
            <div className="container">
              <Alert alert={alert}></Alert>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact
                  path="/user/:login"
                  component={User}
                />
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div >
        </Router>
      </AlertState>
    </GithubState>)

}

export default App;