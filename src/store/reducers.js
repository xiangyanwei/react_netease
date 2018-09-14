import {combineReducers} from 'redux' ;

import {
  RECEIVE_HOME_MSG,
  RECEIVE_NAV_MSG
} from './action_types'

const initHome = {
  mainMsg: {},
  matterMsg: {},
  categoryMsg: {}
} ;

function home (state=initHome, action) {
  switch (action.type){
    case RECEIVE_HOME_MSG :
      var {matterMsg, categoryMsg} = state ;
      return  {
        mainMsg: {...action.data },
        matterMsg,
        categoryMsg
      }
    case RECEIVE_NAV_MSG :
      var {mainMsg, matterMsg} = state ;
      return {
        mainMsg,
        categoryMsg: {...action.data},
        matterMsg
      }
    default:
      return state ;
  }
}

export default combineReducers({
  home
})