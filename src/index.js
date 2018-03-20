import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// locale data
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import { addLocaleData, IntlProvider } from 'react-intl';
import 'semantic-ui-css/semantic.min.css';
import messages from './utils/messages';
import flattenMessages from './utils/flatten';
// routes
import router from './constants/routes';

// css
import './styles/App.css';

// service worker
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './redux-controllers/reducers';
import rootSaga from './sagas';

/* eslint-disable react/jsx-filename-extension */

addLocaleData([...en, ...ru]);


const locale = localStorage.getItem('lang') || 'en-US';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const middlewaresWithDevTools = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, middlewaresWithDevTools);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      {router}
    </IntlProvider>
  </Provider>
  , global.document.getElementById('root'),
);
registerServiceWorker();
