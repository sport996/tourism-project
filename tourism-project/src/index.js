import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, Route} from 'react-router-dom'

import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

ReactDOM.render(  
    <Router>
          <Route path="/" component={App} />
        </Router>
    , document.getElementById("root"));
registerServiceWorker();
