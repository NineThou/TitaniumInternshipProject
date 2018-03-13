import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import 'semantic-ui-css/semantic.min.css';
import messages from './utils/messages';
import flattenMessages from './utils/flatten';
// routes
import Router from './constants/routes';

// css
import './styles/App.css';

// service worker
import registerServiceWorker from './registerServiceWorker';

// locale data
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';


addLocaleData([...en, ...ru]);

const locale = 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Router />
  </IntlProvider>
  , global.document.getElementById('root'));
registerServiceWorker();
