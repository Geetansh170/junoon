import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div>
          {/* <h1>LETS MAKE THIS BRO</h1> */}
          <Switch>
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
