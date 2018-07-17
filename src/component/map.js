import React from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
let pos = [52.101035484049724, 23.77022445201874];
const logger = (position) => {
  console.log(position.latlng);
}
const MapComponent = ({markers}) => (
	<Map onclick={logger} center={pos} zoom={13} style={{width: '100vw', height: '20vh', marginTop: '40px'}} >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {markers.map((mark, i) => {
          return(
            <Marker position={mark.latlng} key={i}>
          <Popup>
            <div>
              <h3>{mark.name}</h3>
              <img className='popupimage' src={mark.image} />
            </div>
          </Popup>
        </Marker>
          )
        })}
      </Map>
);
  export default MapComponent;
  