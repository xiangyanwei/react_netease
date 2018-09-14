import React, {Component} from 'react' ;
import Header from '../header/header';
import LoginWay from './loginWay/loginWay';

class Login extends Component{

  render(){
    return(
      <div>
        <Header/>
        <LoginWay/>
      </div>
    )
  }
}

export default Login