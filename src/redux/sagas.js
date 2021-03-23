import { all } from 'redux-saga/effects';
import books from './books/sagas';
import authors from './authors/sagas';

export default function* rootSaga() {
  yield all([
    books(),
    authors()
  ])
}
