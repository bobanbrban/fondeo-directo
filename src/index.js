import Trash from './components/Trash'
import Spam from './components/Spam'
import Inbox from './components/Inbox'
import React from "react";
import {render} from "react-dom"
import FaTrash from 'react-icons/lib/fa/trash';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaBug from 'react-icons/lib/fa/bug';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';
import { NavLink } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory(

  )



render(

<Router>
   <div className="navHeader">
          <div className="mailListHeader">
                
                <span className="Inbox-link"><NavLink to='/Inbox' activeStyle={{ color: '#4990E2' }}><FaInbox className= "Icon"/>Inbox</NavLink></span>
                <span className="Trash-link"><NavLink to='/Trash' activeStyle={{ color: '#4990E2' }}><FaTrash className= "Icon" />Trash</NavLink></span>
                <span className="Spam-link"><NavLink to='/Spam' activeStyle={{ color: '#4990E2' }}><FaBug className= "Icon" />Spam</NavLink></span>
              </div>     
       <Route exact path="/" component={Inbox}/>
      <Route exact path="/Inbox" component={Inbox} history={history}/>
      <Route exact path="/Trash" component={Trash} history={history}/>
      <Route exact path="/Spam" component={Spam} history={history}/>
     
  
    </div>
  </Router>,
 window.document.getElementById('root')
);registerServiceWorker();
