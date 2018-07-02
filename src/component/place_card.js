import React from 'react';
const PlaceCard  = ({name, image, desc}) => (
    <div>
        <h1>{name}</h1>
        <img src={image} style={{width: '300px', margin: '20px'}}/>
        <p>{desc}</p>
    </div>
);
export default PlaceCard;