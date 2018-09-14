import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class Brilliant extends Component{
  static propTypes = {
    yxWeek: PropTypes.array.isRequired
  }
  render(){
    const {yxWeek} = this.props ;
    return (
      <div className="more_brilliant">
        <div className="brilliant_header">
          <span className="line_over">更多精彩</span>
          <span className="line"></span>
        </div>
        {
          yxWeek.map((item, index)=>{
            return (
              <div className="brilliant_item"  key={index}>
                <div className="only_one">
                  <img src={item.scenePicUrl} alt='pic' />
                </div>
                <span>{item.title}</span>
              </div>
            )
          })
        }
        <div className="brilliant_item">
          <div className="three_img">
            <img src="//yanxuan.nosdn.127.net/14974394461430381.jpg?imageView&quality=75" alt='pic' />
              <div className="right_img">
                <img src="//yanxuan.nosdn.127.net/14974394396900380.jpg?imageView&quality=75" alt='pic'/>
                  <img src="//yanxuan.nosdn.127.net/14974394535190382.jpg?imageView&quality=75" alt='pic' />
              </div>
          </div>
          <span>严选原创设计 风袅桃溪系列首发</span>
        </div>
      </div>
    )
  }
}

export default Brilliant