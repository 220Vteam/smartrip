import { combineReducers } from 'redux';
import place from './place';
import trip from './trip';
import user from './user'

export default combineReducers({
    place,
    trip,
    user
});