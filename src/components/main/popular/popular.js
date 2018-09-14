import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import BScroll from 'better-scroll' ;
import Split from '../../split/split';
class Popular extends Component{
  static propTypes = {
    popularItemList: PropTypes.array.isRequired,
    popularItemNewUserList: PropTypes.array.isRequired
  }

  componentDidUpdate(){
    this._initSlideItem(this.slide) ;
    this._initSlideItem(this.slideOne) ;
    new BScroll('.slide_wrapper', {
      scrollX: true,
      click: true
    })
    new BScroll('#slide_once', {
      scrollX: true,
      click: true
    })
  }

  _initSlideItem(el){
    const slide = el ;//this.$refs.slide_item ;
    const space = 30 ;
    let slideWidth = 0 ;
    Array.from(slide.children).forEach((item, index)=>{
      slideWidth += item.clientWidth + space
    })
    slide.style.width = slideWidth + 'px' ;
  }
  render(){
    const {popularItemList, popularItemNewUserList} = this.props ;
    return(

      <div>
        <section className="slide_wrapper" >
          <div className="direct_slide_wrapper" ref={slideDiv => this.slide = slideDiv}>
            {
              popularItemList.map((item, index)=>{
                return(
                    <div className="direct_slide_item" key={index}>
                      <img src={item.primaryPicUrl} alt='pic'/>
                      <span>{item.name}</span>
                      <span className="good_detail">{item.simpleDesc}</span>
                      <span className="good_price">￥{item.retailPrice}</span>
                    </div>
                )
              })
            }
          </div>
        </section>
        <Split/>
        <header className="direct_wrapper">
          <div className="direct_header">
            <span>人气推荐·好物精选</span>
            <span className="link_other">查看全部&gt;</span>
          </div>
        </header>
        <section className="slide_wrapper" id='slide_once'>
          <div className="direct_slide_wrapper" ref={slideDiv => this.slideOne = slideDiv}>
            {
              popularItemNewUserList.map((item, index)=>{
                return(
                  <div className="direct_slide_item" key={index}>
                    <img src={item.primaryPicUrl} alt='pic'/>
                    <span>{item.name}</span>
                    <span className="good_detail">{item.simpleDesc}</span>
                    <span className="good_price">￥{item.retailPrice}</span>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>

    )
  }
}

export default Popular