const initialState = 0

export const NEXT_ROUND = 'NEXT_ROUND'

export const nextRound = () => {
  return {
    type: NEXT_ROUND,
  }
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_ROUND:
      return state + 1
    default:
      return state
  }
}

export default reducer
