import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import * as itemsReducers from './reducers';

const middleware = [thunk, promiseMiddleware()];

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'local') {
    const logger = createLogger({
        logErrors: true,
        collapsed: true
    });
    middleware.push(logger);
}

export default function configureStore() {
    return createStore(
        combineReducers({...itemsReducers}),
        applyMiddleware(...middleware)
    )
};