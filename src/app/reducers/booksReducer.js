import initialState from './initialState';

import {
  GET_BOOKS,
  ADD_BOOK
} from '../actions/actionTypes';

export default function (state = initialState.books, action) {
  switch (action.type) {
    case GET_BOOKS:
      // [{id: x, first_name: x, last_name: y}]
      return action.books.data;
    case ADD_BOOK:
      let obj = {
        id: 1,
        first_name: action.bookTitle,
        last_name: action.bookTitle
      };

      return [
        ...state,
        obj
      ];
    default:
      return state;
  }
};
