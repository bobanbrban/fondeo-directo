import React from 'react';
import MailList from '../components/MailList.js';
import MailImage from '../assets/mail.svg'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

const API = 'https://raw.githubusercontent.com/bobanbrban/bobanetest/master/mail-dat.json';


class Trash extends React.Component {


  constructor(){
    super();
    this.state = {
      MailList:[]
    }
  }
  getMailList(){
     fetch(API)
      .then(response => response.json())
      .then(data => this.setState({MailList: data}, function(){
          console.log(this.state);
        }),
      );
  }


 componentWillMount(){
   this.getMailList();
 }

 componentDidMount(){
  this.getMailList();
 }





    render() {
          if(document.getElementById === "mailRight") {
        return (
            <div>
              <ul>
                  <MailList MailList={this.state.MailList}/>

               </ul>


              <section className="mailBodyRight">

                 <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />


             </section>
           </div>
        )}

        else return  (
            <div>
              <ul>



               </ul>


              <section className="mailBodyRight">

                 <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />


             </section>
           </div>
        )} ;
    }



export default Trash
