import React from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from '../components/Projects';
import MailList from '../components/MailList.js';
import '../stylesheets/App.css';
import MailImage from '../assets/mail.svg'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css'; 


export class Inbox extends React.Component {
  

  constructor(){
    super();
    this.state = {
      projects: [],
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

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Agave Lab',
        body:"Morbi dignissim metus sed diam pharetra, sit amet condimentum massa consequat. Duis dignissim dolor pulvinar augue pulvinar, ac molestie nunc dapibus. Ut ullamcorper velit et metus aliquam tincidunt. Duis vel sodales risus, a sodales nulla. Maecenas dignissim neque non ex mollis iaculis. Nam hendrerit libero id magna convallis ultricies. Fusce et elementum dolor, ut auctor mi. Integer varius vel eros vel ullamcorper. Donec id posuere lectus.Curabitur quis turpis a tellus posuere fermentum. Phasellus eu congue justo. Morbi non ornare ligula. Aliquam erat volutpat. Curabitur massa ante, cursus et nibh in, mollis scelerisque lorem. Fusce nunc magna, faucibus a nisi sit amet, aliquam convallis dui. Ut id arcu sit amet enim semper suscipit vitae sed ligula.",
        subject :'Amazon SES Address Verification Request', 
        from: '<mhallatt@agavelab.com>',
        date: 'Thursday May 26. 11:09AM ',
        isReaded : false,        
      },
      //{
      //  id:uuid.v4(),
      //  title: 'Web Deisgn',
      //  category: 'condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
      //  subject :'Office Assistant IV', 
      //  from: 'mhallatt0@walmart.com',
      //  date: '3/31/2017',
      //  isReaded : false,        
      //},
     
    ]});
  }

 componentWillMount(){
   this.getProjects();
   this.getMailList();
 }

 componentDidMount(){
  this.getMailList = setInterval(this.getMailList.bind(this),90000)
 }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

 // handleChange(project){
 //    let projects = this.state.projects;
 //    let change = projects.change();
 //    projects.change(project.isReaded);
 //    this.setState({isReaded: true});
 //  }

     render() {
      //probably here should go some function to make mails appear in interval of 90 seconds (90000 ms)
      return (
            <div>
              <ul> 
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                  <MailList MailList={this.state.MailList}/>
                
              </ul>
              
              <section className="mailBodyRight">

                 <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
                 <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
    
             </section>
           </div> 
        );
    }
}


export default Inbox