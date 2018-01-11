import { connect } from 'react-redux';
import Content from './Content'
import {getUsers} from '../actions'

/*
POST todos
{
    "_id": "5a56b0b8d8ef1d001231b3aa",
    "email": "mark.c.oliver@gmail.com",
    "password": "$2a$10$EGpe2XXNotLGKel7KlGvYOLv2NvMrSNpzjAiq5M0412ioxyQ.L3QK",
    "__v": 2,
    "todos": [
        {
            "text": "finish this project",
            "_id": "5a56b1a0d8ef1d001231b3ae",
            "completed": true
        },
        {
            "text": "finish this project",
            "_id": "5a57b0755780000012596840",
            "completed": false
        }
    ]
}

POST signin
{ 
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTU3YjEzOTU3ODAwMDAwMTI1OTY4NDMiLCJpYXQiOjE1MTU2OTY4MTE0MDh9.-vM5sdaaUjKlwkr47Ady8REYG7n1suItHDsCk11viX8",
    "user": {
        "_id": "5a57b1395780000012596843",
        "email": "testxx@gmail.com",
        "password": "$2a$10$yJkVnYraVIElkEGmOpLNueDbRuCN6TKseJoP3xf8WyGPSmWnnWVQW",
        "__v": 0,
        "todos": []
    }
}

POST users
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTU3YjEzOTU3ODAwMDAwMTI1OTY4NDMiLCJpYXQiOjE1MTU2OTY0NDE4MzN9.jpZ8cfDeI52g6I5rO4Sy6gZw_Mxx41v5myhzJ_zYRiE",
    "user": {
        "__v": 0,
        "email": "testxx@gmail.com",
        "password": "$2a$10$yJkVnYraVIElkEGmOpLNueDbRuCN6TKseJoP3xf8WyGPSmWnnWVQW",
        "_id": "5a57b1395780000012596843",
        "todos": []
    }
}

*/
const mapStateToProps = (state) => {
    return {
      todos: state.user.todos,
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      saveToDo: (ownProps) => dispatch(postToDo(ownProps.text, ownProps.token)), 
      toggleTodo: (ownProps = dispatch())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps )(Content);