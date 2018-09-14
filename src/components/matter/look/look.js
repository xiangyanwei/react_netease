import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class Look extends Component{
  static propTypes = {
    matterMsg : PropTypes.object.isRequired
  }
  render(){
    const {matterMsg} = this.props ;
    return(
      <div className="select_look">
        <div className="header_look">
          严选LOOK
        </div>
        <img className="entertainment" src={matterMsg.yxLook.picUrl} />
        <div className="user_recommend">
          <div className="user_look">
            <img src={matterMsg.yxLook.avatar}/>
            <span>{matterMsg.yxLook.topicId}</span>
          </div>
          <div className="comment_look">
            {matterMsg.yxLook.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Look