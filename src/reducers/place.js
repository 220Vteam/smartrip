const initialState = [
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