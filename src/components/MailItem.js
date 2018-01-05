import React, { Component } from 'react';
import FaCircle from 'react-icons/lib/fa/circle';
import FaUser from 'react-icons/lib/fa/user';



class MailItem extends Component {
  render() {
    return (
       <div className="mailItems">
             <span className="Sender"><FaUser className="User" /><span className="senderName">{this.props.mail.from}</span></span><span className="Date">{this.props.mail.date}</span><br/>
             <span className="Title"><FaCircle className="Circle" />{this.props.mail.title}</span><br/>
             <span className="mailBodyList">{this.props.mail.body}</span><br/>
             <span className="Subject">{this.props.mail.subject}</span><br/>
             <span className="To">{this.props.mail.to}</span><br/>
             <span className="Tag">{this.props.mail.tag}</span><br/>
             <span className="IsReaded">{this.props.mail.IsReaded}</span><br/>

             
             
             
         

      </div>
    );
  }
}


export default MailItem;
