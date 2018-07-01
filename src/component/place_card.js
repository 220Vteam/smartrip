import React from 'react';
const PlaceCard  = ({name, image, description}) => (
    <div>
        <h1>{name}</h1>
        <img src={image} style={{width: '300px', margin: '20px'}}/>
        <p>{description}</p>
    </div>
);
export default PlaceCard;