import { connect } from 'react-redux'
import Round from './Round'
import { nextRound } from '../ducks/round'
import { error, clear } from '../ducks/error'

const mapStateToProps = (state) => {
  return {
    pictures: state.game[state.round].pictures,
    answer: state.game[state.round].answer,
    round: state.round,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextRound: () => dispatch(nextRound()),
    error: msg => dispatch(error(msg)),
    clear: () => dispatch(clear()),
  }
}

const RoundContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Round)

export default RoundContainer
