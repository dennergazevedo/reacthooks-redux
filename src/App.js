import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

// REDUX IMPORTS
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

// HISTORY
import history from './services/history';

// STYLES
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}> {/* PROVIDER RESPONSÁVEL POR COMPARTILHAR O STORE ENTRE OS COMPONENTES */}
      <PersistGate persistor={persistor}> {/* PROVIDER RESPONSÁVEL POR COMPARTILHAR O STORE COM O PERSIST */}
        <GlobalStyles />
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
