const initialState = {
    title: 'GeekTech',
    contactsTitle: ''
}


export default function contactsReducer(state = initialState, action) {
    if(action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload}
    }else if(action.type === 'FROM_INPUT') {
        return {contactsTitle: action.payload}
    }

    return state;
}