import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Map from './component/map';
import * as places_actions from './action/place';
import PlaceEditor from './component/place_editor';
import PlaceList from './container/place_list';
import './App.css';

class App extends Component {
	componentWillMount() {
		fetch('/markers.json').then((res) =>
      	res.json()).then(data=> {this.props.set_places(data)
    	});
  	}
  render() {
    return (
    	<div className="App">
			<PlaceEditor/>
			<PlaceList/>
        	<Map markers={this.props.place.place}/>
      </div>
    );
  }
}
const mapDispatch = dispatch => ({
    ...bindActionCreators(places_actions, dispatch)
  });
  const mapState = (store) => ({
  trip: store,
  place: store
}
);

export default connect(mapState, mapDispatch)(App);
