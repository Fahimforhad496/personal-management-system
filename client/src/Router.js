import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from "./views/Home"
  import About from "./views/About"
  import Topics from "./views/Topic"
  import Library from "./views/Library"
  
  
  export default function AppRouter() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">Topics</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </ul>
  
          <Switch>
          
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topic">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  
  
  
  
  