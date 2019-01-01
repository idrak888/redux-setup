const initialState = {
    text: ''
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ON_SEND':
            return Object.assign({}, state, {
                text: action.text
            });
            break;
        default:
            return state;
    }   
}

export default reducer;