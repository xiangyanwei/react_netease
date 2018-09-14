import React, {Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;

import './loginWay.styl';

class LoginWay extends Component{

  login = ()=>{

  }
  render(){
    return(
      <div className="person">
        <div className="person_enter">
          <div className="person_enter_img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt='pic'/>
          </div>
          <div className="person_enter_d1">
            <input type="tel"  placeholder="请输入手机号" />
          </div>
          <div className="person_enter_d2">
            <input type="text" placeholder="请输入短信验证码"/>
              <span>获取验证码</span>
          </div>
          <div className="person_enter_d3">
            <span>遇到问题？</span>
            <span className="d3_s1">使用密码验证登录</span>
          </div>
          <div className="person_enter_login">
            <div className="login_d1" onClick={this.login}>
              <span >登录</span>
            </div>
            <div className="login_d2">
              <span>其他方式登录</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
    
export default withRouter(LoginWay)