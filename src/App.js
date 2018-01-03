import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/App.css';
import FaCircle from 'react-icons/lib/fa/circle';
import './stylesheets/mailList.css';
import './stylesheets/mailListHeader.css';
import './stylesheets/mailListItem.css';
import './stylesheets/mailBody.css';



class LoggingButton extends React.Component {
 
    constructor(props) {
    super(props);
    this.state = {isReaded: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
   this.setState(prevState => ({
      isReaded: !prevState.isReaded
  }));
  }


  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <Link to="#" ><FaCircle onClick={(e) => this.handleClick(e)} activeStyle={{ color: '#4990E2' }} className= "mainIconCircle"/></Link>
      
    );
  }
}




 export default LoggingButton