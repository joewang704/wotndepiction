import { connect } from 'react-redux'
import Error from './Error'

const mapStateToProps = (state) => {
  return {
    msg: state.error
  }
}

const mapDispatchToProps = dispatch => {
}

const ErrorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Error)

export default ErrorContainer
