import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import Swiper from 'swiper' ;
import 'swiper/dist/css/swiper.min.css' ;
// import './css/carousel.styl' ;

export default class Carousel extends  Component{
  static propTypes = {
    cateList: PropTypes.array.isRequired
  }
  componentDidMount(){
    new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  render(){
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.props.cateList.map((item, index)=>{
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item.bannerUrl} alt='pic'/>
                </div>
              )
            })
          }
        </div>
        {/*{<!-- 如果需要分页器 -->}*/}
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}