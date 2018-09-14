import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;
import BScroll from 'better-scroll' ;
import {withRouter} from 'react-router-dom' ;

import RightNav from '../../components/category/rightNav';
import './css/category.styl';

import { receiveCategoryMsg} from '../../store/actions';

class Category extends Component{

  state = {
    currentIndex : 0
  }
  componentWillMount(){
    this.props. receiveCategoryMsg() ;
  }
  componentDidUpdate(){
    if(!this.BS){
      this.BS = new BScroll('.left_display_wrapper', {
        click: true
      })
      this.left_nav.children[0].className= 'left_display_item active' ;
    }
  }
  componentDidMount(){

  }
  select = (event)=>{
    Array.from(this.left_nav.children).forEach((item, index)=>{
      item.className = 'left_display_item' ;
    })
    event.target.className = 'left_display_item active';
    const index = event.target.getAttribute('data-index') ;
    this.setState({
      currentIndex: index
    })
  }
  render(){
    const {categoryMsg} = this.props.home ;
    if(!categoryMsg.categoryL1List){
      return (
          <div>loading</div>
      )
    }
    return(
        <div className="category">
          <header className="search">
            <input type="text" placeholder="搜索商品, 共13234款好物"/>
            <span className="icon-search">
              <i className="iconfont icon-sousuo"/>
            </span>
          </header>
          <div className="display_wrapper">
            <div className="left_display_wrapper">
              <div className="left_display">
                <ul className="left_display_list" ref={nav => this.left_nav = nav}>
                  {
                    categoryMsg.categoryL1List.map((item, index)=>{
                      return(
                        <li className="left_display_item" key={index} onClick={this.select}
                        data-index={index}>
                          {item.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <RightNav categoryMsg={categoryMsg} currentIndex={this.state.currentIndex}/>
          </div>
          
        </div>
    )
  }
}
withRouter(Category) ;
export default connect(
    state => ({home: state.home}),
    { receiveCategoryMsg}
)(Category) ;