import { all, put, call, takeLatest, delay } from 'redux-saga/effects'
import * as BookService from '../../services/books'

import actions from './actions'

export function* LOAD_BOOKS({ payload }) {
  
  yield put({
    type: actions.SET_STATE,
    payload: { loading: true, toSearch: payload?.toSearch },
  });

  yield delay(100)

  const data = yield call(BookService.getBooks, { search: payload.toSearch });

  yield put({
    type: actions.SET_STATE,
    payload: {
      data: data,
      loading: false
    },
  })
}

export function* INIT_BOOK() {
  const data = yield call(BookService.getBooks, { search: undefined });
  yield put({
    type: actions.SET_STATE,
    payload: {
      data: data,
      loading: false
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOAD_BOOKS, LOAD_BOOKS),
    INIT_BOOK(),
  ])
}
