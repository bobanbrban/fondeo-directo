import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mails }  from './mailsState'
import { isreaded }  from './IsReaded'
import { markspam }  from './markSpam'
import { removemail }  from './removeMail'




export const rootReducer = combineReducers({mails,isreaded,markspam,removemail, routing: routerReducer});




