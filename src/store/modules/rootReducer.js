// MÓDULO RESPONSÁVEL POR COMBINAR TODOS REDUCERS
import { combineReducers } from 'redux';

import post from './post/reducer'; // REDUCER
// import exemplo from './exemplo/reducer'; // REDUCER EXTRA PARA EXEMPLO

export default combineReducers({
    post,
    //exemplo,
});