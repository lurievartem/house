import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import fetchApi from '../../api/fetch';
import { SIGN_IN, SIGN_UP, PASS_RECOVERY, signSucess, signFailure } from './SignActions';
import { hideModal } from '../ModalCtnr/ModalActions';

/* SignIn, SignUp*/
function* signUser({ payload: { path, user, type, resolve, reject } }){
    try{
        const res = yield call(fetchApi, { path, data: { user, type } });
        debugger;
        if(typeof resolve === 'function'){
            yield call(resolve);
        }
        yield put(signSucess(res.user));

        yield call(localStorage.setItem, 'id_token', res.token);
        yield put(hideModal());
    } catch(e){
        if(typeof reject === 'function'){
            yield call(reject);
        }
        yield put(signFailure(e));
    }
}

export function* signSaga(){
    yield* takeLatest(SIGN_IN, signUser);
    yield* takeLatest(SIGN_UP, signUser);
}


/* Password recovery */
function* passRecovery({ payload: { path, email } }){
    try{
        yield call(fetchApi, { path, data: email });
        console.info('password send'); /* TODO change it */
    }catch(e){
        console.error(e);         /* TODO show error */
    }
}

export function* passRecoverySaga(){
    yield* takeLatest(PASS_RECOVERY, passRecovery);
}
