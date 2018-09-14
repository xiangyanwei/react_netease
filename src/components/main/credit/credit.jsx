import React, {Component} from 'react' ;
import PropTypes from 'prop-types' ;

class Credit extends Component{
  static propTypes = {
    policyDescList: PropTypes.array.isRequired
  }
  render(){
    const {policyDescList} = this.props
    return (
      <div className="credit_wrapper">
        {
          policyDescList.map((item, index)=>{
            return(
              <span className="credit_item" key={index}>
                <i className="iconfont icon-duigou1"/>
                <span>{item.desc}</span>
              </span>
            )
          })
        }
      </div>
    )
  }
}

export default Credit