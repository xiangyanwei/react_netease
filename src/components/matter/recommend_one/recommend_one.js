import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class RecommendOne extends Component{

  static propTypes = {
    matterMsg: PropTypes.object.isRequired
  }
  render(){
    const {matterMsg} = this.props ;
    return (
        <div className="recomments">
          <div className="recommend_wrapper">
            <div className="recommend">严选甄品</div>
            <div className="recommend_image">
              <img src={matterMsg.zhenThree.picUrl} alt='pic'/>
            </div>
            <div className="recommend_info">
              <div className="recommend_kind">
                <span className="left">{matterMsg.zhenThree.title}</span>
              </div>
              <span className="recommend_des">{matterMsg.zhenThree.subTitle}</span>
            </div>
          </div>
          <div className="food">
            <div className="food_wrapper boutique_wrapper">
              <div className="food_info boutique_info">
                <div className="food_brief boutique_brief">{matterMsg.zhenTwo.title}</div>
                <div className="food_intro boutique_intro">{matterMsg.zhenTwo.subTitle}</div>
              </div>
              <div className="food_img">
                <img src={matterMsg.zhenTwo.picUrl} alt='pic'/>
              </div>
            </div>
            <div className="food_wrapper boutique_wrapper">
              <div className="food_info boutique_info">
                <div className="food_brief boutique_brief">{matterMsg.zhenThree.title}</div>
                <div className="food_intro boutique_intro">{matterMsg.zhenThree.subTitle}</div>
              </div>
              <div className="food_img">
                <img src={matterMsg.zhenThree.picUrl} alt='pic'/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default RecommendOne