import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

export default (history, initialState) => {
    let devTool = f => f;
    if(process.env.NODE_ENV === 'development'){
        devTool = typeof window === 'object' &&
            typeof window.devToolsExtension !== 'undefined'
                ? window.devToolsExtension()
                : devTool;
    }

    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(logger, sagaMiddleware),
            devTool
        )
    );

    sagaMiddleware.run(rootSaga);

    if(module.hot){
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
