import React, { Component } from 'react';
import {connect} from 'react-redux';
import Map from './components/Map'
import './App.css';

class App extends Component {
  componentWillMount() {
    {this.props.dispatch({type: 'ADD_PLACE', payload: {
      name: "Mario",
      latlng: [52.0989233,23.7681006],
      image: "https://pp.userapi.com/c844618/v844618760/7dfb1/7kcNbHfq_Io.jpg",
      desc: "Парк «Воинов-интернационалистов» в микрорайоне «Восток» природный и культурно-просветительный комплекс, который позволяет обеспечивать наилучшие условия для отдыха различных групп населения и проведения культурно-массовых, физкультурно-оздоровительных мероприятий, организации игр и развлечений, создания условий для занятий художественным и любительским творчеством." 
  }})}
  {this.props.dispatch({type: 'ADD_PLACE', payload: {
    name: "Mario2",
    latlng: [52.0989233,23.7681006],
    image: "https://pp.userapi.com/c844618/v844618760/7dfb1/7kcNbHfq_Io.jpg",
    desc: "2" 
}})}
  }
  render() {
    return (
      <div className="App">
         <Map position={this.props.place.place[0].latlng}/>
         <img src='../public/Lifecycle-3.png'/>
      </div>
    );
  }
}



const mapState = (store) => ({
  trip: store,
  place: store
}
);

export default connect(mapState)(App);
