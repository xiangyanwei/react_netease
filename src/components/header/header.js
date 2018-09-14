import React, {Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;

import './header.styl';

class Header extends Component{

  goto = (path)=>{
    this.props.history.push(path)
  }
  render(){
    return(
      <div className="profile_header_wrapper">
        <div className="first_show" onClick={()=>this.goto('/main')}>
          <i className="iconfont icon-shouye-1"/>
        </div>
        <div className="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
        </div>
        <div className="right_icon">
          <span>
            <i className="iconfont icon-sousuo"/>
          </span>
          <span onClick={()=>this.goto('/shop')}>
            <i className="iconfont icon-gouwuche"/>
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)