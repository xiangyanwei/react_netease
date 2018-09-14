import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

import Split from '../../split/split' ;

class LiveHome extends Component{
  static propTypes = {
    cateList: PropTypes.array.isRequired
  }
  render(){
    const {cateList} = this.props ;
    return(
      <div>
        {
          cateList.map((cate, index)=>{
           if(index<3){
             return(
               <div key={index}>
                 <div className="live_home_wrapper" >
                   <header className="live_home_header">
                     {cate.name}
                   </header>
                   <ul className="live_home_list" >
                     {
                       cate.itemList.map((item, index)=>{
                         return(
                             <li className="live_home_item" key={index}>
                               <div className="img_wrapper"><img src={item.primaryPicUrl} alt='pic'/></div>
                               <div className="suggest_price">仅售供应商建议价的1/6</div>
                               <span className="discount orange">今日特价</span>
                               <div className="live_home_info">{item.simpleDesc}</div>
                               <div className="live_home_name">{item.name}</div>
                               <div className="price">￥{item.retailPrice}</div>
                             </li>
                         )
                       })
                     }
                   </ul>
                 </div>
                 <Split/>
               </div>
             )
           }
          })
        }
      </div>
    )
  }
}

export default LiveHome