import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	createStore,
	combineReducers,
} from 'redux';
import * as reducers from './reducer';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

// const initialState = store.getState(); // sanity check

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));

registerServiceWorker();
