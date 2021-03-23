import { all, put, call, takeLatest, delay } from 'redux-saga/effects'
import * as AuthorService from '../../services/authors'

import actions from './actions'

export function* LOAD_AUTHORS({ payload }) {
  
  yield put({
    type: actions.SET_STATE,
    payload: { loading: true, toSearch: payload.toSearch },
  });

  yield delay(300)

  const data = yield call(AuthorService.getAuthors, { search: payload.toSearch });
  
  yield put({
    type: actions.SET_STATE,
    payload: {
      data: data,
      loading: false
    },
  })
};

export function* INIT_AUTHORS() {
  const data = yield call(AuthorService.getAuthors, { search: undefined });
  
  yield put({
    type: actions.SET_STATE,
    payload: {
      data: data,
      loading: false
    },
  });
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOAD_AUTHORS, LOAD_AUTHORS),
    INIT_AUTHORS()
  ])
}
