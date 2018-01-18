import React, { Component } from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaUser from 'react-icons/lib/fa/user';
import FaCircle from 'react-icons/lib/fa/circle';
import FaBug from 'react-icons/lib/fa/bug';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';



class MailItem extends Component {


    


 deleteMailItem(){
    this.props.onDelete();
  }

handleClick() {

    
       document.getElementById("rightHidden").style.display = "none";

  }



  render() {
   
       
    return (
       
       <div className="allInbox">
          <div className="mailItems" id="mailRight" >
             <span className="Sender"><FaUser className="User" /><span className="senderName">{this.props.mail.sender}</span></span><span className="Date">{this.props.mail.date}</span><br/>
             <span className="Title"><FaCircle className="Circle" />{this.props.mail.title}</span><br/>
             <span className="mailBodyList">{this.props.mail.body}</span><br/>
             <span className="Subject">{this.props.mail.subject}</span><br/>
             <span className="To">{this.props.mail.to}</span><br/>
             <span className="Tag">{this.props.mail.tag}</span><br/>
             <span className="IsReaded">{this.props.mail.IsReaded}</span>
          </div>
        <div id="rightSide">  
          <section className="rightSide" id="rightHidden" style={{display: 'none'}}  >
            <div>
              <h5 className="subjectMain">{this.props.mail.subject}<span className="mainIcons"><NavLink to="#" className="mainInbox-link" ><FaBug className= "mainIconCircle" /></NavLink>
              <Link to="#" ><FaTrash onClick={this.handleClick.bind(this)} className= "mainIconTrash" /></Link>
              <NavLink to="#" activeStyle={{ color: '#4990E2' }} className="mainSpam-link"><FaBug className= "mainIconSpam" /></NavLink></span></h5>
             
           <section className="Project">
             <section className="mainTitleGroup">
                <span className="titleMain">{this.props.mail.title}</span>
                <span className="fromMain"><a href="mailto:mhallatt@agavelab.com?Subject=Fondeo-Directo-Test" target="_top" className="mailLink">{this.props.mail.from}</a></span>
                <span className="dateMain"> {this.props.mail.dateFull}</span> 
               </section>
              <p className="bodyMain">{this.props.mail.body}</p>
              <p className="bodyMain">{this.props.mail.body}</p>
              <p className="bodyMain">{this.props.mail.body}</p>
              <p className="bodyMain">{this.props.mail.body}</p> 
           </section>
           </div>
         </section>
      </div>
      </div>  
            
    );
  }
}




     
             
             
             
         

    


export default MailItem;
