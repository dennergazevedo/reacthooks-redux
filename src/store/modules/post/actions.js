export function addPostRequest(title){
    return{
        type:'@post/ADD_POST_REQUEST',
        payload:{ title },
    };
}

export function addPost(title){
    return{
        type:'@post/ADD_POST_SUCCESS',
        payload:{ title },
    };
}

export function cleanPostRequest(){
    return{
        type:'@post/CLEAN_POST_REQUEST',
    };
}

export function cleanPostSuccess(){
    return{
        type:'@post/CLEAN_POST_SUCCESS',
    };
}

