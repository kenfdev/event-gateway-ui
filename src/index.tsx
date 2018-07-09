import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';

// side-effect imports
// tslint:disable:no-import-side-effect
import './rxjs-imports';

import store, { history } from './store';
import App from './App';

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

render(Root, document.getElementById('root'));
registerServiceWorker();
