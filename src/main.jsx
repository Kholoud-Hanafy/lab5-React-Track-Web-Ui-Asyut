import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store'; // Import your Redux store
import {LanguageProvider} from './Contexst/languageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}> {/* Wrap App with Provider and pass store as prop */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </Provider>
  </BrowserRouter>
);
