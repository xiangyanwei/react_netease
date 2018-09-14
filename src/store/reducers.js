import {combineReducers} from 'redux' ;

import {
  RECEIVE_HOME_MSG,
  RECEIVE_NAV_MSG,
  RECEIVE_DETAIL_MSG
} from './action_types'

const initHome = {
  mainMsg: {},
  matterMsg: {},
  categoryMsg: {}
} ;

function home (state=initHome, action) {
  switch (action.type){
    case RECEIVE_HOME_MSG :
      const {matterMsg, categoryMsg} = state ;
      return  {
        mainMsg: {...action.data },
        matterMsg,
        categoryMsg
      }
    case RECEIVE_DETAIL_MSG :
      return {
        mainMsg: state.mainMsg,
        categoryMsg: state.mainMsg,
        matterMsg: {...action.data}
      }
    case RECEIVE_NAV_MSG :
      return {
        mainMsg: state.mainMsg,
        categoryMsg: {...action.data},
        matterMsg: state.matterMsg
      }
    default:
      return state ;
  }
}

export default combineReducers({
  home
})