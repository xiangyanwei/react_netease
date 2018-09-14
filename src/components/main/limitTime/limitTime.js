import React, {Component} from 'react' ;

class Limit extends Component{

  render(){
    return(
        <div className="limit_time_shop">
          <div className="limit_time">
            <span>严选限时购</span>
            <div className="time_wrapper">
              <span>812</span>&nbsp;:
              <span>10</span>&nbsp;:
              <span>49</span>
            </div>
            <span>100086</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/166f9fe0fe9cbe3c77daf12edb388dce.png?imageView&quality=85&thumbnail=330x330" alt='pic'/>
        </div>
    )
  }
}

export default Limit