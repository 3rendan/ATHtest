const itemsReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case 'GET_ITEM':
            return {
                ...state,
                item: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default itemsReducer