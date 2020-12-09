import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// SAGA
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

// ROOT
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// SAGA MIDDLEWARES
const sagaMiddleware = createSagaMiddleware();
const middlewares=[sagaMiddleware];

// PERSIST
const persistConfig = {
    key: 'inputOn',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, middlewares);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store , persistor };