const initialState = [
    {
        name: null,
        latlng: [0,0],
        desc: null,
        image: null
    }
]
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PLACE':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;           
    }
}