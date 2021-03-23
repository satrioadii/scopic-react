import { combineReducers } from 'redux'
import books from './books/reducers'
import authors from './authors/reducers'

export default function () {
  return combineReducers({
    books,
    authors
  })
}
