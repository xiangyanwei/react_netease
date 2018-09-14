import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;
import BScroll from 'better-scroll' ;

class RightNav extends Component{
  static propTypes = {
    categoryMsg: PropTypes.object.isRequired
  }
  componentDidUpdate(){
    if(!this.BS){
      this.BS = new BScroll('.right_display_wrapper', {
        click: true
      })
    }

  }
  render(){
    const {currentIndex, categoryMsg} = this.props ;
    console.log(currentIndex, categoryMsg);

    return(
      <div className="right_display_wrapper">
        <div className="right_display">
          <div className="right_display_header">
            <img src={categoryMsg.categoryL1List[currentIndex].wapBannerUrl} alt='pic'/>
          </div>
          <ul className="right_display_list">
            {
              categoryMsg.categoryL1List[currentIndex].subCateList.map((item, index)=>{
                return (
                  <li className="right_display_item" key={index}>
                    <img src={item.wapBannerUrl} alt='pic'/>
                    <span>{item.name}</span>
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

export default RightNav

