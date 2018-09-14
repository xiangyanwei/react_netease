import React, {Component} from 'react' ;
import {connect} from 'react-redux' ;
import BScroll from 'better-scroll' ;

import Header from '../../components/header/header';
import Carousel from '../../components/matter/matter_carousel/matter_carousel';
import ImgNav from '../../components/matter/imgNav/imgNav';
import Split from '../../components/split/split';
import Recommend from '../../components/matter/recommend/recommend';
import Moment from '../../components/matter/moment/moment' ;
import RecommendOne from '../../components/matter/recommend_one/recommend_one';
import Look from '../../components/matter/look/look' ;
import Brilliant from '../../components/matter/moreBrilliant/moreBrilliant';
import './matter.styl';

import {receiveDetailMsg} from '../../store/actions';

class Matter extends Component{

  componentWillMount(){
    this.props.receiveDetailMsg() ;
  }
  componentDidUpdate(){
    if(!this.BS){
      this.BS = new BScroll('.matter_page_wrapper', {
        click: true
      })
    }
  }
  render(){
    const {matterMsg} = this.props.home ;
    if(!matterMsg.banner){
      return (
          <div>loading</div>
      )
    }
    const {banner, column, tenfifteen, yxWeek} = matterMsg ;
    return (
      <div>
        <Header/>
        <div className="matter_page_wrapper">
          <div className="matter_page_content">
            <Carousel banner={banner}/>
            <ImgNav column={column}/>
            <Split/>
            <Recommend matterMsg={matterMsg}/>
            <Split/>
            <Moment tenfifteen={tenfifteen}/>
            <Split/>
            <RecommendOne matterMsg={matterMsg}/>
            <Split/>
            <Look matterMsg={matterMsg}/>
            <Brilliant yxWeek={yxWeek}/>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
    state => ({home: state.home}),
    {receiveDetailMsg}
)(Matter) ;