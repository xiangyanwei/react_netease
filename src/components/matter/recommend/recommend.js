import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class Recommend extends Component{

  static propTypes = {
    matterMsg: PropTypes.object.isRequired
  }
  render(){
    const {matterMsg} = this.props ;
    return (
        <div className="recomments">
          <div className="recommend_wrapper">
            <div className="recommend">为你推荐</div>
            <div className="recommend_image" >
              <img src={matterMsg.recommendOne.picUrl} alt='pic'/>
            </div>
            <div className="recommend_info">
              <div className="recommend_kind">
                <span className="left">{matterMsg.recommendOne.title}</span>
                <span className="right">{matterMsg.recommendOne.priceInfo}元起</span>
              </div>
              <span className="recommend_des">{matterMsg.recommendOne.subTitle}</span>
            </div>
          </div>
          <div className="food">
            <div className="food_wrapper">
              <div className="food_info">
                <div className="user_info">
                  <img src={matterMsg.zhenTwo.avatar} alt='pic'/>
                <div>饮食组：万万</div>
              </div>
              <div className="food_brief">{matterMsg.zhenTwo.title}</div>
              <div className="food_intro">{matterMsg.zhenTwo.subTitle}</div>
            </div>
            <div className="food_img">
              <img src={matterMsg.zhenTwo.picUrl} alt='pic'/>
            </div>
          </div>
          <div className="food_wrapper">
            <div className="food_info">
              <div className="user_info">
                <img src={matterMsg.recommendTwo.avatar} alt='pic'/>
              <div>饮食组：万万</div>
            </div>
            <div className="food_brief">{matterMsg.recommendTwo.title}</div>
            <div className="food_intro">{matterMsg.recommendTwo.subTitle}</div>
          </div>
          <div className="food_img">
            <img src={matterMsg.recommendTwo.picUrl} alt='pic'/>
          </div>
        </div>
  </div>
    <div className="recommend_wrapper">
      <div className="recommend_image">
        <img src={matterMsg.zhenOne.picUrl} alt='pic'/>
      </div>
      <div className="recommend_info">
        <div className="recommend_kind">
          <span className="left">{matterMsg.zhenOne.title}</span>
          <span className="right">{matterMsg.zhenOne.priceInfo}元起</span>
        </div>
        <span className="recommend_des">{matterMsg.zhenOne.subTitle}</span>
      </div>
    </div>
    <div className="food">
      <div className="food_wrapper">
        <div className="food_info">
          <div className="user_info">
            <img src={matterMsg.recommendThree.avatar} alt='pic'/>
          <div>{matterMsg.recommendThree.nickname}</div>
        </div>
        <div className="food_brief">{matterMsg.recommendThree.title}</div>
        <div className="food_intro">{matterMsg.recommendThree.subTitle}</div>
      </div>
      <div className="food_img">
        <img src={matterMsg.recommendThree.picUrl} alt='pic'/>
      </div>
    </div>
    <div className="food_wrapper">
      <div className="food_info">
        <div className="user_info">
          <img src='//yanxuan.nosdn.127.net/63e132fbcbef7befe561cb091c849dcb.jpg?imageView&quality=75&thumbnail=48y48' alt='pic'/>
          <div>{matterMsg.recommendThree.nickname}</div>
        </div>
        <div className="food_brief">{matterMsg.recommendThree.title}</div>
        <div className="food_intro">{matterMsg.recommendThree.subTitle}</div>
      </div>
      <div className="food_img">
        <img src={matterMsg.recommendThree.picUrl} alt='pic'/>
      </div>
    </div>
  </div>
  </div>
    )
  }
}

export default Recommend