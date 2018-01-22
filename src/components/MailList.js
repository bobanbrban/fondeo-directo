import React, { Component } from 'react';
import MailItem from './MailItem';



class MailList extends Component {
constructor(){
    super();
    this.state = {


    }
  }


deleteMail() {
        this.props.onDelete();
    }


handleClick() {

       document.getElementById("circleon").className = "mailRightOnClick";
        document.getElementById("rightHidden").style.display = "block";
  


  }


  render() {
    let MailItems;
    if(this.props.MailList){
      MailItems = this.props.MailList.map(mail => {
        console.log(mail);
        return (
          <li className="mail1" onClick={this.handleClick.bind(this)}><MailItem key={mail.i} mail={mail} /></li>
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
