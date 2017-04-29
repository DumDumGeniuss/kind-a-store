import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index.js';

import { Provider } from 'react-redux';
import storeCreator from './store/create.js';
import './index.css';

const app = document.getElementById('root');

/**
* Hydrate the server side State.
*/
// const store = storeCreator(window.__INITIAL_STATE__);
const store = storeCreator({});

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>
, app);

