import React, { Component } from 'react';
import MailItem from './MailItem';



class MailList extends Component {
  

  render() {
    let MailItems; 
    if(this.props.MailList) {
       MailItems = this.props.MailList.map(mail => {
        return (
          <MailItem key={mail.title} mail={mail} />
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
