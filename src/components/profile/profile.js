import React, {Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;

import './profile.styl' ;
class Profile extends Component{

  goTo = ()=>{
    this.props.history.push('/login')
  }
  render(){
    return(
      <div className="profile_content">
        <div className="netease_select">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt='pic'/>
        </div>
        <div className="login_wrapper" onClick={this.goTo}>
          <div className="phone_login">
            <span>
              <i className="iconfont icon-shouji"/>
            </span>
            <span>
              手机号码登录
            </span>
          </div>
          <div className="mail_login">
            <span>
              <i className="iconfont icon-youxiang"/>
            </span>
            <span>
              邮箱账号登录
            </span>
          </div>
          <span>手机号快速注册</span>
        </div>
        <div className="login_way">
          <div className="login_icon">
            <span>
              <i className="iconfont icon-changyonglogo28"/>
            </span>
            <span>微信</span>
          </div>
          <div className="login_icon">
            <span>
              <i className="iconfont icon-QQ"/>
            </span>
            <span>QQ</span>
          </div>
          <div className="login_icon">
            <span>
             <i className="iconfont icon-weibo"/>
            </span>
            <span>微博</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)