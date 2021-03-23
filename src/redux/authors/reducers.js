import actions from './actions'

const initialState = {
  loading: false,
  data: [],
}

export default function authorReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }

    default:
      return state
  }
}