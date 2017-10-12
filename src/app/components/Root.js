// react + component
import React, {Component} from "react";
// react-dom still render the whole component
import { render } from "react-dom";

import Header from "./Header";

class Root extends Component{

  render() {
    let renderData;
    renderData = (
      this.props.children
    );

    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header></Header>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {renderData}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
