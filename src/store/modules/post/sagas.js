import { takeLatest, put , all } from 'redux-saga/effects';

import { addPost, cleanPostSuccess } from './actions';

export function* adicionarNewPostTitle({ payload }){
    try{
        yield put(addPost(payload.title));
        window.alert(`Post ${payload.title} adicionado com sucesso!`);
    }catch(err){
        window.alert(`Falha ao adicionar o Post ${payload.data.title}`);
    }
}

export function* cleanPost(){
        yield put(cleanPostSuccess());
        window.alert(`Posts Limpos!`);
}

export default all([
    takeLatest('@post/ADD_POST_REQUEST', adicionarNewPostTitle),
    takeLatest('@post/CLEAN_POST_REQUEST', cleanPost),
]);