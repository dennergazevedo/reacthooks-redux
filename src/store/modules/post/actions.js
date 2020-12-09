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