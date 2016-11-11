import { fork } from 'redux-saga/effects';
import { signSaga, passRecoverySaga } from 'containers/Sign/SignSaga';

export default function* rootSaga(){
    yield [
        fork(signSaga),
        fork(passRecoverySaga)
    ];
}
