import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter} from 'react-router-dom'

import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

ReactDOM.render(  <HashRouter >
             <App/>
            </HashRouter>, document.getElementById("root"));
registerServiceWorker();
