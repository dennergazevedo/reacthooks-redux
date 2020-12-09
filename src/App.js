import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

// REDUX
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

// HISTORY
import history from './services/history';

// STYLES
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
