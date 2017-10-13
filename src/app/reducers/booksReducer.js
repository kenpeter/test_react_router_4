import initialState from './initialState';

import {
  GET_BOOKS
} from '../actions/actionTypes';

export default function (state = initialState.books, action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
};
