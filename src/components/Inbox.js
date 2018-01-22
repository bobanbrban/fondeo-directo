import React from 'react';
import MailList from '../components/MailList.js';
import MailImage from '../assets/mail.svg'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';




const API = 'https://raw.githubusercontent.com/bobanbrban/bobanetest/master/mail-dat.json';


class Inbox extends React.Component {


  constructor(){
    super();
    this.state = {
      MailList:[],
    }
  }

  getMailList(){
     fetch(API)
      .then(response => response.json())
      .then(data => this.setState({MailList: data}, function(){
          console.log();
        }),
      );
  }


 componentWillMount(){
   this.getMailList();
 }

 componentDidMount(){

             let MailList =  this.getMailList();
             setInterval(function(){() => {this.MailList.bind(this)}
               console.log(this.getMailList)
             },3000);
}





  //   handleDeleteMailList(id){
  //   let MailList = this.state.MailList;
  //   let index = MailList.findIndex(x => x.id === id);
  //   MailList.splice(index, 1);
  //   this.setState({MailList:MailList});
  // }



     render() {



      return (
            <div>
              <ul>

              <MailList MailList={this.state.MailList}/>
              <MailList MailList={this.state.MailList}/>
              <MailList MailList={this.state.MailList}/>


              </ul>
              <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
              <MailList />
           </div>
        );
    }
}


export default Inbox
