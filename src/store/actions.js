import {
  reqHomeData,
  reqNavData
} from '../api' ;
import {
  RECEIVE_HOME_MSG,
  RECEIVE_NAV_MSG
} from './action_types' ;

const receiveHome = (home) => ({type: RECEIVE_HOME_MSG, data: home});
const receiveCategory = (nav)=>({type: RECEIVE_NAV_MSG, data: nav}) ;

//获取第1屏的数据
export function receiveHomeData(){
  return async dispatch => {
    const result = await reqHomeData() ;
    if(result.code === 0){
      dispatch(receiveHome(result.home)) ;
    }
  }
}

//第3屏数据
export function receiveCategoryMsg(){
  return async dispatch => {
    const result = await reqNavData() ;
    if(result.code === 0){
      dispatch(receiveCategory(result.nav))
    }
  }
}