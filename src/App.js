import "./App.css";
import * as React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>testing</h1>
        <hr />
        <a href="https://api.instagram.com/oauth/authorize?client_id=968783993938106&redirect_uri=https://shauandsss.github.io/pinit/map&scope=user_profile,user_media,instagram_graph_user_profile&response_type=code">
          Authorize on Instagram
        </a>

        <Route exact path="/map">
          <div>Access</div>
          {console.log(new URLSearchParams(window.location.search).get("id"))}
          {new URLSearchParams(window.location.search).get("id")}
          {console.log(new URLSearchParams(window.location.search).get("code"))}
          {new URLSearchParams(window.location.search).get("code")}
        </Route>
      </Router>
    </div>
  );
}

export default App;
