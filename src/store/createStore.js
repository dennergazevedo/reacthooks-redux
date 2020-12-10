/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
    const enhancer = applyMiddleware(...middlewares); // CRIA UM ENHANCER PARA ADICIONAR FUNCIONALIDADES EXTRAS AO STORE DO REDUX
    
    return createStore(reducers, enhancer); // CRIA O ESTADO GLOBAL
};