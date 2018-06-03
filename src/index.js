import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import leafUiTheme, { injectBaseStyles } from 'leaf-ui/theme';

import configureStore from './configureStore';
import App from './containers/App';

// ////////////////////////////////////////////////////////////

const store = configureStore();

const persistor = persistStore(store);

injectBaseStyles(leafUiTheme);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={leafUiTheme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
