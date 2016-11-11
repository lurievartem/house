import { SIGN_IN, SIGN_SUCCESS, SIGN_FAILURE, SIGN_OUT } from 'containers/Sign/SignActions';

export default (state = { isAuthenticated: false, user: {} }, action) => {
    switch(action.type){
        case SIGN_IN:
            return { ...state, isAuthenticated: false };
        case SIGN_SUCCESS:
            return { ...state, isAuthenticated: true, user: action.user };
        case SIGN_FAILURE:
        case SIGN_OUT:
            return { ...state, isAuthenticated: false, name: {} };
        default:
            return state;
    }
};

export const getAuthenticatedStatus = state => state.auth.isAuthenticated;
export const getAuthenticatedName = state => state.auth.user.name;
export const getAuthenticatedUser = state => state.auth.user;
