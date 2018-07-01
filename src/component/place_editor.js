import React, { Component } from 'react';
class PlaceEditor extends Component {
    render() {
        return (
            <div>
            <form>
                <label>Название места
                    <input name='name' type='text'/>
                </label><br/>
                <label>Описание
                    <textarea name='description' cols='12'/>
                </label>
                <br/>
                <label>Дабавте фотографию
                    <input name='image' type='file'/>
                </label><br/>
                <input type='submit' value='добавить'/>
            </form>
        </div>
        );
    }
};
export default PlaceEditor;