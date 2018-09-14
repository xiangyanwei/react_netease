import React, {Component} from 'react' ;
import {Provider} from 'react-redux' ;
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom' ;

//引入自定义的组件
import FooterGuide from './components/footerGuide/footerGuide' ;
import './mock/mockServer';
import Main from './containers/main/main' ;
import Matter from './containers/matter/matter' ;
import Category from './containers/category/category' ;
import ShopCart from './containers/shopCart/shopCart' ;
import Profile from './containers/profile/profile' ;
import store from './store';
class App extends Component{

  render(){
    console.log(store);
    return (
        <div>
          <Provider store={store}>
            <HashRouter>
              <div>
                <Switch>
                  <Route path='/main' component={Main}/>
                  <Route path='/matter' component={Matter}/>
                  <Route path='/category' component={Category}/>
                  <Route path='/shop' component={ShopCart}/>
                  <Route path='/profile' component={Profile}/>
                  <Redirect push to= '/main'/>
                </Switch>
                <FooterGuide/>
              </div>
            </HashRouter>
          </Provider>

        </div>

    )
  }
}

export default App