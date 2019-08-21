import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { HashRouter as Router, Route} from 'react-router-dom'

import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";
// Add custom css import below this line
import "./index.css";

// <Router>
//       <Route path="/" component={App} />
//     </Router>
ReactDOM.render(  
    <App />, document.getElementById("root"));
registerServiceWorker();
