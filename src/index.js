import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/BitBucket">
        <App />
      </BrowserRouter>
      {/* </PersistGate>*/}
    </Provider>
  </React.StrictMode>
);

// user-butbucket i8oRaKca2NfcsQpf
//mongodb+srv://user-butbucket:8oRaKca2NfcsQpf@cluster0.4dvwoew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
