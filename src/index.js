// import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/ui.less';
import '@/styles/icon.less';

// import registerServiceWorker from './registerServiceWorker';

require('es6-promise').polyfill();

ReactDOM.render(Router, document.getElementById('root'));

// open this when https is enabled
// registerServiceWorker();
