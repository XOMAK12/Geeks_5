const initialState = {
    title: 0
}


export default function reducer(state = initialState, action) {

    if (action.type === '+1') {
        return { ...state, title: state.title + 1 };
    } else if (action.type === '-1') {
        return { ...state, title: Math.max(0, state.title - 1) };
    } else if (action.type === '+10') {
        return { ...state, title: state.title + action.payload };
    } else if (action.type === '-10') {
        return { ...state, title: Math.max(0, state.title - action.payload) };
    } else if (action.type === 'RESET') {
        return { ...state, title: 0 };
    }

    return state;
}