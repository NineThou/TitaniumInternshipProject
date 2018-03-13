import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

// routes
import router from './constants/routes';

// css
import './styles/App.css';

// service worker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(router, global.document.getElementById('root'));
registerServiceWorker();
