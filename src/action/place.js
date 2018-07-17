export const set_places = places => ({
    type: 'SET_PLACES',
    payload: places
});
export const add_place = place => ({
    type: 'ADD_PLACE',
    payload: place
});
export const fetch_places = () => ( dispatch =>
    fetch('/markers.json').then(({ data }) => {
        dispatch(set_places(data));
    })
);