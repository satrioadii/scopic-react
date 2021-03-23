import actions from './actions'

const initialState = {
  loading: false,
  data: [],
  toSearch: ''
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}