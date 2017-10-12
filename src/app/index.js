import React, {Component} from  "react";
import { render } from "react-dom";
import { browserHistory} from "react-router";
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Root>
            <Route exact path={"/"} component={Home} />
          </Root>
        </div>
      </Router>
    )
  }
}

render (<App />, window.document.getElementById("app"));
