import React, {Component} from "react";
import {
  Link
} from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <div>
        <h1>Header</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/user">user</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
