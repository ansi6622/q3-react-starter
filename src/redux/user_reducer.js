import JWT from '../helpers/jwt_helper'

import{

  LOG_IN,
  SIGN_UP,
} from './actions'

const INITIAL_STATE = { cred: {}, token: '' };

export default function(state = INITIAL_STATE, action){

  switch(action.type){
    case SIGN_UP:
      JWT.save(action.payload.data);
      return {...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    case LOG_IN:
      JWT.save(action.payload.data);
      return { ...state,
        cred: action.payload.data.user,
        token: action.payload.data.token
      };
    default:
      return state
  }
}
