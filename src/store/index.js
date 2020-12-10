// PERSIST IMPORT
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// SAGA IMPORT
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

// ROOT IMPORT
import rootReducer from './modules/rootReducer'; // MÓDULO QUE PERMITE TER MAIS DE UM REDUCER NA APLICAÇÃO
import rootSaga from './modules/rootSaga'; // MÓDULO QUE PERMITE TER MAIS DE UMA SAGA NO MÓDUTO

// SAGA MIDDLEWARES
const sagaMiddleware = createSagaMiddleware(); // FUNÇÃO QUE CRIA A SAGA
const middlewares=[sagaMiddleware]; // FUNCIONALIDADES EXTRAS DO STORE DO REDUX (REDUX-SAGA)

// PERSIST - CONFIGURAÇÃO DO STORAGE PARA O PERSIST
const persistConfig = {
    key: 'inputOn',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer); // RETORNA UM REDUCER ENHANCER, É UMA FUNÇÃO QUE GUARDA O ESTADO AUTOMATICAMENTE
const store = createStore(persistedReducer, middlewares); // CRIAÇÃO DO ESTADO GLOBAL + CRIAÇÃO DA SAGA

const persistor = persistStore(store); // MOSTRA AO PERSIST QUAL ESTADO DEVE GUARDAR

sagaMiddleware.run(rootSaga); // INICIA O ROOT SAGA

export { store , persistor }; // EXPORTA O STORE DO REDUX + CONFIG DO PERSIST