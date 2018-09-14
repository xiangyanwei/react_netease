import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;
import BScroll from 'better-scroll' ;

import {receiveHomeData} from '../../store/actions';
import './css/main.styl';


import Carousel from '../../components/main/carousel/carousel';
import Credit from '../../components/main/credit/credit' ;
import Split from '../../components/split/split';
import Producer from '../../components/main/producer/producer' ;
import Popular from '../../components/main/popular/popular';
import Limit from '../../components/main/limitTime/limitTime' ;
import Special from '../../components/main/special/special' ;
import LiveHome from '../../components/main/liveHome/liveHome' ;
import Footer from '../../components/main/footer/footer';
class Main extends Component{

  state= {
    condition: 'tab_item'
  }
  componentWillMount(){
    this.props.receiveHomeData() ;
  }
  componentDidUpdate(){
    if(!this.BS){
      this._initUlWidth() ;
      this.BS = new BScroll('.main_scroll_wrapper',{
        click: true,
      })
      this.navUl.children[0].className = 'tab_item on';
    }
  }
  _initUlWidth(){
    const ul = this.navUl ;
    const space = 16;
    let ulWidth = 0 ;
    Array.from(ul.children).forEach((li, index) =>{
      ulWidth += li.clientWidth + space ;
    })
    ul.style.width = ulWidth  + 'px' ;
    new BScroll('.nav_tab', {
      scrollX: true,
      click: true
    })
  }
  //点击导航条
  select=(event)=>{
    Array.from(this.navUl.children).forEach((item, index)=>{
      item.className = 'tab_item'
    })
    event.target.className = 'tab_item on'
  }
  render(){
    if(!this.props.home.mainMsg.cateList){
      return (<div>loading</div>)
    }else{
      const{
        headCateList,
        cateList,
        policyDescList,
        tagList,
        popularItemList,
        popularItemNewUserList,
        topicList
      } = this.props.home.mainMsg ;
      
      return(
        <div className="main_wrapper">
          <div className="header">
            <header className="main_header">
                <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt= 'logo'/>
                <div className="search">
                  <input type="text" placeholder="搜索商品，共10719款好货"/>
                  <i className="iconfont icon-sousuo"/>
                </div>
            </header>
            <nav className="nav_tab">
              <ul className="tab_wrapper" ref={ul => this.navUl = ul} >
                {
                  headCateList.map((headCate, index)=>{
                    return(
                      <li className="tab_item" onClick={this.select} key={index}>{headCate.name}</li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
          <div className="main_scroll_wrapper">
            <div className="detail_wrapper" >
              <Carousel cateList={cateList}/>
              <Credit policyDescList={policyDescList}/>
              <Split/>
              <Producer tagList={tagList}/>
              <Split/>
              <div className="direct_wrapper">
                <div className="direct_header">
                  <span>人气推荐</span>
                  <span className="link_other">查看全部&gt;</span>
                </div>
              </div>
              <Popular popularItemList={popularItemList} popularItemNewUserList={popularItemNewUserList}/>
              <Split/>
              <Limit/>
              <Split/>
              <div className="welfare"/>
              <Split/>
              <Special topicList={topicList}/>
              <Split/>
              <LiveHome cateList={cateList}/>
              <Footer/>
            </div>
          </div>
        </div>
      )
    }
   
  }
}

export default connect(
    state => ({home: state.home}),
    {receiveHomeData}
)(Main)