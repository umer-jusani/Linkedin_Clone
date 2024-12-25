export const initialState = {
    userDetails: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERDETAILS':
            return { ...state, userDetails: action.payload };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};