import React, {Component} from 'react' ;
import {withRouter} from 'react-router-dom' ;

import './css/footer.styl' ;

class FooterGuide extends Component{

  skipPath=(path)=>{
    this.props.history.push(`/${path}`)
  }
  render(){
    let path = this.props.location.pathname ;
    return (
      <div className="footer_wrapper"
           style={{display: (path === '/profile' || path ==='/login') ? 'none' : '' }}>
        <span className={(path === '/main') ? 'tab_wrapper on': 'tab_wrapper'} onClick={()=>this.skipPath('main')}>
          <span className="icon">
            <i className="iconfont icon-shouye-1"/>
          </span>
          <span className="tab_font">
            首页
          </span>
        </span>
        <span className={(path === '/matter') ? 'tab_wrapper on': 'tab_wrapper'} onClick={()=>this.skipPath('matter')}>
          <span className="icon">
            <i className="iconfont icon-ego-box"/>
          </span>
          <span className="tab_font">
            识物
          </span>
        </span>
        <span className={(path === '/category') ? 'tab_wrapper on': 'tab_wrapper'} onClick={()=>this.skipPath('category')}>
          <span className="icon">
            <i className="iconfont icon-fenlei"/>
          </span>
          <span className="tab_font">
            分类
          </span>
        </span>
        <span className={(path === '/shop') ? 'tab_wrapper on': 'tab_wrapper'} onClick={()=>this.skipPath('shop')}>
          <span className="icon">
            <i className="iconfont icon-gouwuche"/>
          </span>
          <span className="tab_font">
              购物车
          </span>
        </span>
        <span className={(path === '/profile') ? 'tab_wrapper on': 'tab_wrapper'} onClick={()=>this.skipPath('profile')}>
          <span className="icon">
            <i className="iconfont icon-geren"/>
          </span>
          <span className="tab_font">
            个人
          </span>
        </span>
      </div>
    )
  }
}

export default withRouter(FooterGuide)