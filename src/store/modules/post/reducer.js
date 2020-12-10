import produce from 'immer'; // IMPORTAÇÃO

const INITIAL_STATE = { // ESTADO INICIAL
    data: [],
};

export default function post(state = INITIAL_STATE, action){ // POST REDUCER COM O ESTADO INICIAL E A ACTION COMO PARÂMETRO
    return produce(state, draft => { // STATE: ESTADO ATUAL, DRAFT: 'INSTÂNCIA DO ESTADO, POSSÍVEL DE MODIFICAÇÃO'
    switch(action.type){ // SWITCH PARA PERCORRER A ACTION
        case "@post/ADD_POST_SUCCESS":{ // CASO A ACTION.TYPE SEJA "@post/ADD_POST_SUCCESS" EXECUTA O CÓDIGO DENTRO DO CORPO
            draft.data = [...state.data, action.payload.title]; // MODIFICA O STATE.DATA DE = [] PARA [...state.data, action.payload.title]
            break; // STOP CASE
        }
        case "@post/CLEAN_POST_SUCCESS":{
            draft.data = [];
            break;
        }
            
        default: // NÃO É NECESSÁRIO DECLARAR UM DEFAULT, MAS SE PREFERIR PODE DECLARAR
    }
    });
}