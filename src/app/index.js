// React, my component extend component
import React, {Component} from  "react";

// Render dom
import { render } from "react-dom";

// route with history
import { browserHistory } from "react-router";

// react-router-dom = react-router + dom
// Router is like home router
// Route is where to go
// IndexRoute is index
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";

class App extends Component {
  // Router with browswer history
  // Root is like the layout, then we have sub componnet
  render() {
    return (
      <Router history={browserHistory}>
        <div>
          <Root>
            <Route exact path={"/"} component={Home} />
            <Route path={"/user"} component={User} />
            <Route path={"/home"} component={Home} />
          </Root>
        </div>
      </Router>
    )
  }
}

render (<App />, window.document.getElementById("app"));
