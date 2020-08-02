const defaultState = {
    currentUser: null,
}

export const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CURRENT_USER":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}