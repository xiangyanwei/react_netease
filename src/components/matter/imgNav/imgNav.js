import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import BScroll from 'better-scroll' ;

class ImgNav extends Component{
  static propTypes = {
    column: PropTypes.array.isRequired
  }
  componentDidMount(){
    this._initSlideWidth(this.img_nav_ul, 30) ;
    new BScroll('.img_nav_wrapper', {
      click: true,
      scrollX: true
    })
  }
  _initSlideWidth(el, num){
    const slide = el ;
    const space = num ;
    let slideWidth = 0 ;
    Array.from(slide.children).forEach((item, index)=>{
      slideWidth += item.offsetWidth + space
    })
    slide.style.width = slideWidth + 'px' ;
  }
  render(){
    const {column} = this.props ;
    return(
      <div className="img_nav_wrapper">
        <ul className="img_nav_list" ref={ul => this.img_nav_ul = ul}>
          {
            column.map((item, index)=>{
              return (
                <li className="img_nav_item"  key={index}>
                  <img src={item.picUrl} alt='pic'/>
                  <span>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ImgNav