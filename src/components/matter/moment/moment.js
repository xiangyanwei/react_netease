import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import BScroll from 'better-scroll' ;

class Moment extends Component{

  static propTypes = {
    tenfifteen: PropTypes.array.isRequired
  }

  componentDidMount(){
    this._initSlideWidth(this.moment_container, 30) ;
    new BScroll('.moment_slide_wrapper', {
      click: true,
      scrollX: true
    })
  }
  _initSlideWidth(el, num){
    const slide = el ;//this.$refs.slide_item ;
    const space = num ;
    let slideWidth = 0 ;
    Array.from(slide.children).forEach((item, index)=>{
      slideWidth += item.offsetWidth + space
    })
    slide.style.width = slideWidth + 'px' ;
  }
  render(){
    const {tenfifteen} = this.props ;
    return (
      <div className="moment">
        <div className="moment_header">十点一刻</div>
        <div className="moment_slide_wrapper">
          <div className="moment_wrapper" ref={div => this.moment_container = div}>
            {
              tenfifteen.map((item, index)=>{
                return (
                  <div className="topic_wrapper" key={index}>
                    <div className="topic">
                      {item.participantNum === '0' ? '-今日话题-' : '' }
                    </div>
                    <div className="topic_tips">
                      <span>{item.title}</span>
                      <span>{item.desc}</span>
                    </div>
                    <div className="participators">
                      <div className="participator_img">
                        <i className="iconfont icon-geren" />
                        <img className="user" src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48" alt='pic'/>
                        <img className="user" src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48" alt='pic'/>
                        <div>...</div>
                        <span>989人参与话题</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Moment