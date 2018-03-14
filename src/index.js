import React from 'react';
import ReactDOM from 'react-dom';
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


addLocaleData([...en, ...ru]);


const locale = localStorage.getItem('lang') || 'en-US';
console.log(localStorage.getItem('lang'));

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    {router}
  </IntlProvider>
  , global.document.getElementById('root'));
registerServiceWorker();
