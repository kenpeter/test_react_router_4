import React, {Component} from "react";
import * as booksAction from '../actions/booksAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Home extends Component{

  componentDidMount() {
    this.props.booksAction.fetchBooks();
  }

  displayData() {
    let books = this.props.books;
    let output = '';
    if(books) {
      if(books.length === 0) {
        return output;
      } else {
        output = books.map((item, index) => {
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

  submitBook(e) {
    // no default
    e.preventDefault();
    // buffer like array, but obj arr
    const formData = {};
    // forloop this.refs
    // this.refs[field].value
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    // key: value
    //console.log('-->', formData);
    let bookTitle = formData['bookTitle'];
    this.props.booksAction.addBook(bookTitle);
  }

  displayform() {
    let form = (
      <div>
        <h2>Books Form</h2>
        <form onSubmit={this.submitBook.bind(this)}>
          <input type="text" name="bookTitle" ref="bookTitle"/>
          <input type="submit" />
        </form>
      </div>
    );
    return form;
  }

  render(){
    //console.log(this.props.books);

    return(
      <div>
        <h1>Home</h1>
        {this.displayData()}

        {this.displayform()}
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
