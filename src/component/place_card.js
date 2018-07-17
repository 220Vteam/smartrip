import React from 'react';
const PlaceCard  = ({name, image, desc}, key) => (
    <div key={key}>
        <h1>{name}</h1>
        <img src={image} alt={name} style={{width: '300px', margin: '20px'}}/>
        <p>{desc}</p>
        <button>edit</button>
        <button>delete</button>
    </div>
);
export default PlaceCard;