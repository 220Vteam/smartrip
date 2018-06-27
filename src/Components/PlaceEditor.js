import React from 'react';
const PlaceEditor = () => (
    <div>
        <form>
            <label>Название места</label>
            <input name='name' type='text'/><br/>
            <label>Описание</label>
            <textarea name='description' cols='12'/><br/>
            <label>Дабавте фотографию</label>
            <input name='image' type='file'/>
            <input type='submit' value='добавить'/>
        </form>
    </div>
);
export default PlaceEditor;