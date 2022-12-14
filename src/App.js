import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [shortLiveToken, setShortLiveToken] = useState(null);
  const [longLiveToken, setLongLiveToken] = useState(null);

  //const fetchUserInfo = () => {};
  useEffect(() => {
    if (!shortLiveToken) {
      setShortLiveToken(
        new URLSearchParams(window.location.search).get("code")
      );
      var details = {
        client_id: 968783993938106,
        redirect_uri: "https://shauandsss.github.io/pinit",
        client_secret: "b7e641ff23d76dc270775d3a635944d7",
        grant_type: "authorization_code",
        code: new URLSearchParams(window.location.search).get("code"),
      };

      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");

      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "access-control-request-headers": "access-control-allow-origin",
        },
        body: formBody,
      };
      fetch("https://api.instagram.com/oauth/access_token", requestOptions)
        .then((response) => response.json())
        .then((data) => setLongLiveToken(data))
        .then((data) => console.log(data))
        .then((data) => fetchUserInfo());

      console.log("Short:");
      console.log(shortLiveToken);
      console.log("Long:");
      console.log(longLiveToken);
    }
  }, []);

  function fetchUserInfo() {
    console.log("FETCH USER INFO");

    if (longLiveToken) {
      console.log("FETCH USER INFO abaixo");
      const requestOptions = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "access-control-request-headers": "access-control-allow-origin",
        },
      };
      fetch(
        `https://api.instagram.com/oauth/access_token?fields={id,caption,username}&access_token=${longLiveToken}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }

  return (
    <div className="App">
      <Router>
        <h1>testing</h1>
        <hr />
        <a href="https://api.instagram.com/oauth/authorize?client_id=968783993938106&redirect_uri=https://shauandsss.github.io/pinit&scope=user_profile,user_media,instagram_graph_user_profile&response_type=code">
          Authorize on Instagram
        </a>

        <div>Access</div>
      </Router>

      <button></button>
    </div>
  );
}

export default App;
