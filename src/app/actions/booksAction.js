'use strict';
/* jshint -W101 */

// all type
import * as types from './actionTypes';

// url
function url() {
  // I know it returns names, but we use it as books.
  let url = 'https://reqres.in/api/users?page=1';
  return url;
}

// Action creator
export function getBooksAction(books) {
  let obj = {type: types.GET_BOOKS, books};
  return obj;
}

// Action creator
export function addBookAction(bookTitle) {
  let obj = {type: types.ADD_BOOK, bookTitle};
  return obj;
}


// fetch
export function fetchBooks() {
	// Pass dispatch, return
  return dispatch => {
		// Fetch url, return
    return fetch(url(), {
			// Get
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      let json = response.json();
      return json;
    })
    .then((json) => {
      //console.log('so....');
      //console.log(json);
      dispatch(getBooksAction(json));
    });
  };
}

export function addBook(bookTitle) {
  return dispatch => {
    let action = addBookAction(bookTitle);
    dispatch(action);
  };
}
