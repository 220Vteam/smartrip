export const set_places = places => ({
    type: 'SET_PLACES',
    payload: places
})
export const fetch_places = () => ( dispatch =>
    fetch('/markers.json').then(({ data }) => {
        dispatch(set_places(data));
    })
);