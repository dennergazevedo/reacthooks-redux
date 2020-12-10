// ACTIONS
export function addPostRequest(title){ // DECLARAÇÃO DA FUNÇÃO
    return{
        type:'@post/ADD_POST_REQUEST', // TYPE DA ACTION
        payload:{ title }, // PAYLOAD DA ACTION (PARÂMETRO PASSADO PARA A FUNÇÃO NA SAGA)
    };
}

export function addPost(title){ // DECLARAÇÃO DA FUNÇÃO
    return{
        type:'@post/ADD_POST_SUCCESS', // TYPE DA ACTION
        payload:{ title }, // PAYLOAD DA ACTION (PARÂMETRO PASSADO PARA A FUNÇÃO NA SAGA)
    };
}

export function cleanPostRequest(){ // DECLARAÇÃO DA FUNÇÃO
    return{
        type:'@post/CLEAN_POST_REQUEST', // PAYLOAD DA ACTION (PARÂMETRO PASSADO PARA A FUNÇÃO NA SAGA)
        // COMO PODE VER O PAYLOAD É OPCIONAL
    };
}

export function cleanPostSuccess(){ // DECLARAÇÃO DA FUNÇÃO
    return{
        type:'@post/CLEAN_POST_SUCCESS', // PAYLOAD DA ACTION (PARÂMETRO PASSADO PARA A FUNÇÃO NA SAGA)
        // COMO PODE VER O PAYLOAD É OPCIONAL
    };
}

