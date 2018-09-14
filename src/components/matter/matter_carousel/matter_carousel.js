import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import Swiper from 'swiper' ;
import 'swiper/dist/css/swiper.min.css';

class Carousel extends Component{
  static propTypes = {
    banner: PropTypes.array.isRequired
  }

  componentDidMount(){
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
  }
  render(){
    const {banner} = this.props ;
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" >
          {
            banner.map((item, index)=>{
              return(
                <div className="swiper-slide" key={index}>
                  <img src={item.picUrl} alt='pic'/>
                </div>
              )
            })
          }

        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Carousel