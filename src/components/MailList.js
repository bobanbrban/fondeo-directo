import React, { Component } from 'react';
import MailItem from './MailItem';



class MailList extends Component {
  

  render() {
    let MailItems; 
    if(this.props.MailList) {
       MailItems = this.props.MailList.map(mail => {
        return (
          <li className="mail1"><MailItem key={mail.title} mail={mail} /></li>
        );
      });
    }
    return (
      <div className="mailList">
       {MailItems}
      </div>
    );
  }
}


export default MailList;
