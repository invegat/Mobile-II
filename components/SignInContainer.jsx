import { connect } from 'react-redux';
import SignIn from './SignIn'
import {postSignin} from '../actions'

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signIn: (ownProps) => dispatch(postSignin(ownProps.email, ownProps.password)), 
    }
  }
  export default connect(null, mapDispatchToProps )(SignIn);