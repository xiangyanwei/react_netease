import React, {Component} from 'react' ;

import Header from '../../components/header/header';
import ProContent from '../../components/profile/profile';
class Profile extends Component{

  render(){
    return (
        <div>
          <Header/>
          <ProContent/>
        </div>
    )
  }
}
export default Profile ;