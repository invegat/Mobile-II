import { connect } from 'react-redux';
import TodoList from './TodoList'
import {getUsers} from '../actions'
const mapStateToProps = (state) => {
    return {
      users: state.todos
    }
  }

  export default connect(mapStateToProps, null )(TodoList);