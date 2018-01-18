import React from "react"
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Trash from './components/Trash'
import Spam from './components/Spam'
import Inbox from './components/Inbox'
import { Provider } from 'react-redux';
import { store } from './Store';
import actionApp from './actions/actionApp';




export const routerMain = (    
        
      <Provider store={store}>
       <Router>
          <div className="navHeader">
       <Route path="/" component={actionApp} />
       <Route exact path="/" component={Inbox} createBrowserHistory={createBrowserHistory}/>
      <Route exact path="/Inbox" component={Inbox} createBrowserHistory={createBrowserHistory}/>
      <Route exact path="/Trash" component={Trash} createBrowserHistory={createBrowserHistory}/>
      <Route exact path="/Spam" component={Spam} createBrowserHistory={createBrowserHistory}/>
     
  
    </div>
  </Router>  
 </Provider> 
)

