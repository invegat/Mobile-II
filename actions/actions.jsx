import axios from 'axios';

import * as Constants from '../constants'


export const getUsers = (token) => { // fetch all users
  const promise = axios.get('https://mobile-server-ii.herokuapp.com/users', {
    headers: {
      authorization: token, // attach the token as a header
    }
  });
  return {
    type: Constants.GET_USERS,
    payload: promise
  };
};
export const getUser = (token) => {  // fetch indivisual user
  const promise = axios.get('https://mobile-server-ii.herokuapp.com/user', {
    headers: {
      authorization: token, // attach the token as a header
    }
  });
};

export const postUser = (email, password) => { // signup
  const promise = axios.post('https://mobile-server-ii.herokuapp.com/users', {
    body: {
      email,
      password
    }
  });
  return {
    type: Constants.POST_USERS,
    payload: promise
  };
};
export const postSignin = (email, password) => { // signin
  const promise = axios.post('https://mobile-server-ii.herokuapp.com/signin', {
    body: {
      email,
      password
    }
  });
  return {
    type: Constants.POST_SIGNIN,
    payload: promise
  };
};
export const postToDo = (text, token) => { // 
  const promise = axios.post('https://mobile-server-ii.herokuapp.com/todos', {
    headers: {
      authorization: token, // attach the token as a header
    },    
    body: {
      text
    }
  });
  return {
    type: Constants.POST_TODO,
    payload: promise
  };
};
export const postToDo = (id, token) => { // 
  const promise = axios.post(`https://mobile-server-ii.herokuapp.com/todos/{id}`, {
    headers: {
      authorization: token, // attach the token as a header
    },    
    body: {
      text
    }
  });
  return {
    type: Constants.POST_TODO,
    payload: promise
  };
};




