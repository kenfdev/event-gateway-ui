import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// side-effect imports
// tslint:disable:no-import-side-effect
import './rxjs-imports';

import store from './store';
import App from './App';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();
