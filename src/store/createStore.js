/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
    const enhancer = applyMiddleware(...middlewares);
    
    return createStore(reducers, enhancer);
};