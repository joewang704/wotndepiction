export const ERROR = 'ERROR'
export const CLEAR = 'CLEAR'

export const error = (msg) => {
  return {
    type: ERROR,
    payload: {
      msg: msg,
    }
  }
}

export const clear = () => {
  return {
    type: CLEAR,
  }
}

const initialState = null

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR:
      return payload.msg
    case CLEAR:
      return null
    default:
      return state
  }
}

export default reducer
