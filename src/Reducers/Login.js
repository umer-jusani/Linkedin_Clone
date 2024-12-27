export const initialState = {
    userDetails: null,
    isModelOpen: true
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERDETAILS':
            return { ...state, userDetails: action.payload };
        case 'TOGGLE_MODEL':
            return { ...state, isModelOpen: !state.isModelOpen };

        default:
            return state;
    }
};