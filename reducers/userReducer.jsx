import * as Actions from '../constants'

export default (state = {}, action) => {
 //   if (action.payload && action.type === Actions.GET_YELP) console.log(`yelp reducer action payload.data: ${action.payload.data} action.type: ${action.type}`);
    switch(action.type) {
        case Actions.GET_USER:
            return action.payload.data 
        case Actions.POST_USERS:
            return action.payload.data     
        case Actions.POST_SIGNIN:
            return action.payload.data              
        default:
            return state
    }
}