import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [shortLiveToken, setShortLiveToken] = useState(
    "AQACrQNbAhRPF9BE26Whespmr7UGIa309zwNiowxpiVlJDRHF-1Wknuhb7fyS8lrTddw3YSKbWe8UjUGWV6XJq26hoObQRjgtOxRo8bsLZBNZSU0Lr_3sTXFlhT3raGEK7E7cqdMB0g8qohMAt-Bfl693h3aWIPvspfEPYjVhWUr5b2Q2oYLx_nTLJVg3lZNP7cn-czIrmJq8czOlvu_PAWPGbf_uWTErfz2l4hAnmDsbw"
  );
  const [longLiveToken, setLongLiveToken] = useState("");

  useEffect(() => {
    //setShortLiveToken(new URLSearchParams(window.location.search).get("code"));

    if (shortLiveToken !== "") {
      console.log("Trocando Token");
      var details = {
        client_id: 968783993938106,
        redirect_uri: "https://localhost:3000/",
        client_secret: "b7e641ff23d76dc270775d3a635944d7",
        grant_type: "authorization_code",
        code: shortLiveToken,
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
        },
        body: formBody,
      };
      fetch("https://api.instagram.com/oauth/access_token", requestOptions)
        .then((response) => response.json())
        .then((data) => setLongLiveToken(data));
      console.log(longLiveToken);
    }
  }, [longLiveToken, shortLiveToken]);
  //const fetchUserInfo = () => {};

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
