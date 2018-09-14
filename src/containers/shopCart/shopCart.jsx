import React, {Component} from 'react' ;
import {withRouter} from 'react-router-dom';
import './shopcart.styl';



class ShopCart extends Component{

  goTo = ()=>{
    this.props.history.replace('/profile')
  }
  render(){
    return (
      <div className="shop_cart">
        <div className="shop_cart_header">
          <span className="shop_cart_title">购物车</span>
          <span className="shop_cart_ticket">领券</span>
        </div>
        <div className="shop_cart_content">
          <ul className="quality_guarantee">
            <li className="quality_guarantee_item">30天无忧退货</li>
            <li className="quality_guarantee_item">&nbsp;&nbsp;&nbsp;48小时快速退款</li>
            <li className="quality_guarantee_item">满88元免邮费</li>
          </ul>
          <div className="login_shop_cart">
            <span className="cart" style={{backgroundImage:"url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png')"}}></span>
            <span className="add">去添加点什么吧</span>
            <span className="login" onClick={this.goTo}>登录</span>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(ShopCart) ;