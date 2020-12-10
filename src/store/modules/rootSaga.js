// MÓDULO RESPONSÁVEL PARA SUPORTE DE 2 OU MAIS SAGAS
import { all } from 'redux-saga/effects';

import post from './post/sagas'; // SAGA
// import exemplo from './exemplo/sagas'; // SAGA EXTRA PARA EXEMPLO

export default function* rootSaga(){
    return yield all([
        post,
        //exemplo,
    ]);
}