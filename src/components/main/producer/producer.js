import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class Producer extends Component{
  static propTypes = {
    tagList: PropTypes.array.isRequired
  }
  render(){
    const {tagList} = this.props ;
    return (
      <div className="producer_wrapper">
        <div className="producer">
          品牌制造直供商
          <i className="iconfont icon-rightarrow"/>
        </div>
        <ul className="producer_list">
          {
            tagList.map((item, index)=>{
              if(index<4){
                return(
                  <li className="producer_item"  key={index}>
                    <img src={item.picUrl} alt='pic'/>
                    <div className="tips">
                      <span>{item.name}</span>
                      <span>{item.floorPrice}起</span>
                    </div>
                  </li>
                )
              }
            })
          }

        </ul>
    </div>
    )
  }
}

export default Producer