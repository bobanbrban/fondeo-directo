import React from 'react';
import $ from 'jquery';
import MailList from '../components/MailList.js';
import MailImage from '../assets/mail.svg'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css'; 


class Spam extends React.Component {
  

  constructor(){
    super();
    this.state = {
      MailList:[]
    }
  }



  getMailList(){
    $.ajax({
      url: 'https://raw.githubusercontent.com/bobanbrban/bobanetest/master/mail-dat.json',
      dataType:'json',
      cache: true,
      success: function(data){
        this.setState({MailList: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

 componentWillMount(){
   this.getMailList();
 }

 componentDidMount(){
  this.getMailList();
 }



    render() {
        return (
            <div>
              <ul>  
                 
                <MailList MailList={this.state.MailList}/>
                <MailList MailList={this.state.MailList}/>
                <MailList MailList={this.state.MailList}/>
                
              </ul>    
             
              <section className="mailBodyRight">

                 <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
                
    
             </section>
           </div> 
        );
    }
}


export default Spam