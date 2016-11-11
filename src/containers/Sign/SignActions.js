export const SIGN_IN = 'SIGN_IN';
export function signIn(data){
    return {
        type: SIGN_IN,
        payload: {
            ...data,
            path: 'signin'
        }
    };
}

export const SIGN_UP = 'SIGN_UP';
export function signUp(data){
    return {
        type: SIGN_UP,
        payload: {
            ...data,
            path: 'signup'
        }
    };
}

export const SIGN_SUCCESS = 'SIGN_SUCCESS';
export function signSucess(user){
    return {
        type: SIGN_SUCCESS,
        user
    };
}

export const SIGN_FAILURE = 'SIGN_FAILURE';
export function signFailure(data){
    return {
        type: SIGN_FAILURE,
        data
    };
}

export const PASS_RECOVERY = 'PASS_RECOVERY';
export function passRecovery({ email }){
    return {
        type: PASS_RECOVERY,
        payload: {
            path: 'passrecovery',
            email
        }
    };
}

export const SIGN_OUT = 'SIGN_OUT';
export function signOut(){
    return {
        type: SIGN_OUT
    };
}
