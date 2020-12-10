//REDUX SAGA
import { takeLatest, put , all } from 'redux-saga/effects';

// all - PERMITE RETORNAR UM ARRAY COM TODOS TAKELATEST
// takeLatest - DISPARA UMA FUNÇÃO DA SAGA QUANDO ACIONADO UMA ACTION
// put- CHAMA UMA ACTION PELA FUNÇÃO DENTRO DA SAGA

import { addPost, cleanPostSuccess } from './actions'; // ACTIONS

export function* adicionarNewPostTitle({ payload }){ // SAGA FUNCTION
    try{ // TRY É INÚTIL AQUI, MAS DEIXEI PARA SABER QUE PODE SER USADO EM CASO DE ASSYNC FUNCTIONS
        yield put(addPost(payload.title)); // CHAMADA DA ACTION PELO NOME DA FUNÇÃO
        window.alert(`Post ${payload.title} adicionado com sucesso!`); // ALERTA
    }catch(err){
        window.alert(`Falha ao adicionar o Post ${payload.data.title}`); // ALERTA
    }
}

export function* cleanPost(){ // SAGA FUNCTION
        yield put(cleanPostSuccess()); // CHAMADA DA ACTION PELO NOME DA FUNÇÃO
        window.alert(`Posts Limpos!`); // ALERT
}

export default all([
    takeLatest('@post/ADD_POST_REQUEST', adicionarNewPostTitle), // (TYPE DA ACTION, FUNÇÃO DA SAGA A SER EXECUTADA)
    takeLatest('@post/CLEAN_POST_REQUEST', cleanPost), // (TYPE DA ACTION, FUNÇÃO DA SAGA A SER EXECUTADA)
]);