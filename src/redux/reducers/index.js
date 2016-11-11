import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import modal from './modal';

const rootReducer = combineReducers({
    auth,
    modal,
    form
});

export default rootReducer;
