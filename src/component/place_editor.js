import React, { Component } from 'react';
class PlaceEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            latlng: [53.101035484049724, 24.77022445201874],
            image: null,
        };
    }
    Adding = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    Req = () => {
        this.props.add_place(this.state);
            
    }
    render() {
        return (
            <div>
            <form method='post'>
                <label>Название места
                    <input name='name' ref='name' type='text' onChange={this.Adding}/>
                </label><br/>
                <label>Описание
                    <textarea name='description' ref='desc' cols='12' onChange={this.Adding}/>
                </label>
                <br/>
                <label>Дабавте фотографию
                    <input name='image' type='file' ref='file' onChange={this.Adding}/>
                </label><br/>
                <input type='button'  value='добавить' onClick={this.Req}/>
                <input type='button'  value='отмена' onClick={this.props.OpenEdithor}/>
            </form>
        </div>
        );
    }
};
export default PlaceEditor;