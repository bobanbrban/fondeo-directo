import React, { Component } from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaBug from 'react-icons/lib/fa/bug';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import LoggingButton from '../App';
import '../stylesheets/mediaQueries.css'; 


class ProjectItem extends Component {


  deleteProject(id){
    this.props.onDelete(id);
  }

 changeReaded(IsReaded){
    this.props.onChange(IsReaded)
  }

  render() {
    return (

        <div className="rightSide" >
              <h5 className="subjectMain"> {this.props.project.subject}<span className="mainIcons"><NavLink to="#" className="mainInbox-link" ><LoggingButton onChange={this.changeReaded.bind(this)}/></NavLink>
              <Link to="#" onClick={this.deleteProject.bind(this, this.props.project.id)} className="mainTrash-link"><FaTrash className= "mainIconTrash" /></Link>
              <NavLink to="#" activeStyle={{ color: '#4990E2' }} activeClassName="mainSpam-link"><FaBug className= "mainIconSpam" /></NavLink></span></h5>
             
         <div className="Project">
            <div className="mainTitleGroup">
                <span className="titleMain">{this.props.project.title}</span>
                <span className="fromMain"><a href="mailto:mhallatt@agavelab.com?Subject=Fondeo-Directo-Test" target="_top" className="mailLink">{this.props.project.from}</a></span>
                <span className="dateMain"> {this.props.project.date}</span> 
            </div>
              <p className="bodyMain"> {this.props.project.body}</p>
              <p className="body1Main"> {this.props.project.body}</p>
              <p className="body1Main"> {this.props.project.body}</p>
              <p className="body1Main"> {this.props.project.body}</p>
              <p className="body1Main"> {this.props.project.body}</p>
        
         </div>
      </div>  
    );
  }
}


export default ProjectItem;
