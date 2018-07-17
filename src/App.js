import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Map from './component/map';
import * as places_actions from './action/place';
import PlaceEditor from './component/place_editor';
import PlaceList from './container/place_list';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moderator: true,
			edit_mod: false
		}
	}
	componentWillMount() {
		fetch('/markers.json').then((res) =>
      	res.json()).then(data=> {this.props.set_places(data)
    	});
	}
	OpenEdithor = () => {
		this.setState({edit_mod: !this.state.edit_mod})
	}
	  
  	render() {
		const edithor_menu = (state, actions) => {
			if (state.moderator) {
				return (
					state.edit_mod?<PlaceEditor add_place={actions.add_place} OpenEdithor={this.OpenEdithor}/>:<button onClick={actions.change_mod}>добавить</button>
				)
			}
		}
    return (
    	<div className="App">
			{edithor_menu(this.state, {add_place: this.props.add_place, change_mod: this.OpenEdithor})}
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
