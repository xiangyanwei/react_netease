import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import BScroll from 'better-scroll' ;

class Special extends Component{
  static propTypes = {
    topicList: PropTypes.array.isRequired
  }
  componentDidMount(){
    if(!this.BS){
      this._initSlideItem(this.subject) ;
      this.BS = new BScroll('.subject_list_wrapper',{
        click: true,
        scrollX: true
      })
    }
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
    const {topicList} = this.props ;
    return(
      <div className="special_subject">
        <div className="special_wrapper">
          <span>专题精选</span>
          <i className="iconfont icon-rightarrow"/>
        </div>
        <div className="subject_list_wrapper">
          <ul className="subject_list" ref={Ul => this.subject = Ul}>
            {
              topicList.map((item, index)=>{
                return (
                  <li className="subject_item" key={index}>
                    <img src={item.itemPicUrl} alt='pic'/>
                    <div className="subject_introduce">
                      <span className="left">{item.title}</span>
                      <span className="right">{item.priceInfo}起</span>
                    </div>
                    <span className="subject_name">{item.subtitle}</span>
                  </li>
                )
              })
            }

        </ul>
      </div>
  </div>
    )
  }
}

export default Special