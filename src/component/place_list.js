import React, {Component} from 'react';
import Card from './place_card';
class PlaceList extends Component {
    render() {
        return(
            this.props.place.map((place, i) => <Card {...place} key={i}/>)
        );
    }
};
export default PlaceList;