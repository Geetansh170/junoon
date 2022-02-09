import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import Home from "./components/pages/Home";
import Drive_links from "./components/pages/Drive_links";
import Contact_us from "./components/pages/Contact_us";
import About from "./components/pages/About";
import Insta_gal from "./components/pages/Insta_gal";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";


import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div>
          {/* <h1>LETS MAKE THIS BRO</h1> */}
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/collection' component={Drive_links} />
            <Route exact path='/contact_us' component={Contact_us} />
            <Route exact path='/insta' component={Insta_gal} />
            <Route exact path='/about' component={About} />
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/login' component={Login}/>
        
          </Switch>
          
        </div>
      </div>
    </Router>
  );
};

export default App;
