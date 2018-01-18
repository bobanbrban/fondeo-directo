import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { rootReducer }  from './reducers/indexreducer';
import { mails } from './reducers/mailsState'

const browserHistory = { createBrowserHistory }; 

const defaultState = {
	
   mails

};


export const store = createStore(rootReducer, defaultState);







