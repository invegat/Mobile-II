import { connect } from 'react-redux';
import SignUp from './SignUp'
import {postUsers} from '../actions'

  const mapDispatchToProps = (dispatch, ownProps) => {
    const mapStateToProps = (state) => {
      return {
        token: state.token
      }
    }    
    return {
      postUser: (ownProps) => dispatch(postUsers(ownProps.email, ownProps.password)), 
    }
  }
  export default connect(null, mapDispatchToProps )(SignUp);