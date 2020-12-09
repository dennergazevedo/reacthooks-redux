import produce from 'immer';

const INITIAL_STATE = {
    data: [],
};

export default function post(state = INITIAL_STATE, action){
    return produce(state, draft => {
    switch(action.type){
        case "@post/ADD_POST_SUCCESS":{
            draft.data = [...state.data, action.payload.title];
            break;
        }
            
        default:
    }
    });
}