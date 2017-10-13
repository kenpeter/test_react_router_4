import React, {Component} from "react";
import * as booksAction from '../actions/booksAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Home extends Component{

  // This time bind this works.
  myclick() {
    this.props.booksAction.fetchBooks();
  }

  displayData() {
    let books = this.props.books.data;
    let output = '';
    if(books) {
      if(books.length === 0) {
        return output;
      } else {
        output = books.map((item, index) => {
          console.log('...');
          console.log(item.first_name);
          let first_name = item.first_name;
          return (
            <li key={index}>{item.first_name}</li>
          );
        });

        output = <ul>{output}</ul>;
        return output;
      }
    } else {
      return '';
    }
  }

  render(){
    //console.log(this.props.books);

    return(
      <div>
        <h2>Home</h2>
        {this.displayData()}
        <p>
          <button onClick={this.myclick.bind(this)}>Click!!!!</button>
        </p>
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
