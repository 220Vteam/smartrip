import React from 'react';
import markers from '../markers'
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
let pos = [52.101035484049724, 23.77022445201874];
const logger = (position) => {
  console.log(position.latlng);
}
const MapComponent = (position) => (
    <Map onClick={logger} center={[52.103144366096096, 23.772225379943848]} zoom={13} style={{width: '100vw', height: '500px'}} >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {markers.map((mark) => {
          return(
            <Marker position={mark.latlng}>
          <Popup>
            <img className='popupimage' src={mark.image} />
          </Popup>
        </Marker>
          )
        })}
      </Map>
  )
  export default MapComponent;
  