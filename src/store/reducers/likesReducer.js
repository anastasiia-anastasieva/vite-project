const initialState = {
    count: 0
};

export const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT_LIKES':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}