import React, {Component} from "react";
import * as booksAction from '../actions/booksAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Home extends Component{

  myclick() {
    this.props.booksAction.fetchBooks();
  }

  render(){
    return(
      <div>
        <h2>Home</h2>
        <button onClick={this.myclick.bind(this)}>Click!!!!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.booksReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    booksAction: bindActionCreators(booksAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
