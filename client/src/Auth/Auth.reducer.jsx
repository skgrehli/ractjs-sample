import { authConstant } from './Auth.constant'

const initialState = {
    token: null,
    user: [],
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstant.SIGNUP_USER_SUCCESS:
            return { ...state, user: action.user };
        case authConstant.SIGNUP_USER_FAILURE:
            return { ...state, user: [], userError: action.error };
        case authConstant.AUTH_SET_TOKEN:
            return { ...state, token: action.token };
        case authConstant.AUTH_REMOVE_TOKEN:
            return { ...state, token: null };
        default:
            return state;
    }
};

export default reducer;