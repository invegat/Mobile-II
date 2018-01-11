import * as Actions from '../constants';

export default (state = [], action) => {
  // if (action.payload) console.log(`yelps reducer action payload.data: ${action.payload.data.jsonBody.businesses} action.type: ${action.type}`);
  switch (action.type) {
    case Actions.GET_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
