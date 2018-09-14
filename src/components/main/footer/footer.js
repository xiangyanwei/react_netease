import React, {Component} from 'react' ;

class Footer extends Component{
  
  render(){
    return(
      <div className="main_footer">
        <div className="main_footer_wrapper">
          <div className="download">
            <span>下载APP</span>
            <span>电脑版</span>
          </div>
          <div className="copy_statement">
            <span>网易公司版权所有 &copy; 1997-2018</span>
            <span>食品经营许可证：JY13301080111719</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer