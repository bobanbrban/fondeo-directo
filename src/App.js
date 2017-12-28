import React, { Component } from 'react';
import reactDom from 'react-dom'
import './stylesheets/App.css';
import FaTrash from 'react-icons/lib/fa/trash';
import FaUser from 'react-icons/lib/fa/user';
import FaCircle from 'react-icons/lib/fa/circle';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaMail from 'react-icons/lib/fa/envelope-o';
import FaBug from 'react-icons/lib/fa/bug';
import Mailimage from './assets/mail.svg'
import Mail from './mail-data.js'


class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="Mail-header">
            <h6 className="Mail-contetnt"><a className="Inbox-link"><FaInbox className= "Icon"/>Inbox</a><a><FaTrash className= "Icon" />Trash</a><a><FaBug className= "Icon" />Spam</a></h6>
              <ul className="Mail-list">
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >August 28</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5>
                <div className="second"><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></div></li>

                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >July 28</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >July 08</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >Jun 28</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >May 28</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >May 13</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >May 12</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"><FaUser className= "User" /><span className="Sender">Agave Lab</span><span className= "Date" >May 4</span>
                <h5 className="first"><FaCircle className= "Circle" /><span className="Subject-list">Office Assistant IV</span></h5><span className="Mail-list-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dolor ligula, non sagittis felis ultrices et. Nullam est massa, elementum ac mi sit amet,
                 consectetur porta massa. Proin sagittis nisl sed magna aliquam, eu finibus dui blandit. Vestibulum semper imperdiet tincidunt. Phasellus luctus, magna id interdum volutpat, turpis nulla faucibus orci, vitae congue nisi erat nec elit. 
                 In nec sodales mi, sed maximus justo. Vestibulum quis magna nibh. Mauris non felis in quam commodo rhoncus eu vel libero. Etiam eget finibus lectus. Curabitur blandit ex elit, rhoncus lacinia neque tempor eget. Vivamus sagittis, ante nec pharetra consectetur, 
                 risus leo vulputate nunc, sit amet mattis magna ligula vitae mauris. Nam vitae massa elit. Suspendisse varius vestibulum odio vitae iaculis. Fusce ut dignissim massa.

Duis diam lorem, ornare sed faucibus in, sollicitudin at tortor. Praesent ac gravida turpis. Integer fringilla eget velit ut rutrum. Maecenas ut odio ut nibh feugiat tincidunt sit amet eget odio. Aenean accumsan tincidunt enim, at gravida erat luctus vel. Morbi dapibus et nunc vel rhoncus.
 Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum mollis diam at ligula rhoncus, 
 eget fermentum mauris scelerisque. Nam ultricies tellus et congue condimentum.

Nam faucibus eu lacus eu condimentum. Mauris aliquet, sem et condimentum molestie, tortor augue hendrerit nisl, vel mollis felis orci non sapien. Integer et elit a enim feugiat vestibulum a id diam. Sed commodo blandit dapibus. Praesent non erat quis lacus mollis vulputate. In tincidunt ante sit amet metus
 accumsan accumsan. Proin in faucibus elit. Curabitur condimentum rhoncus vulputate. In aliquet imperdiet risus non finibus.</span></li>
                <li className="Mail-item"></li>
                <li className="Mail-item"></li>
                <li className="Mail-item"></li>
                <li className="Mail-item"></li>
                <li className="Mail-item"></li>
                <li className="Mail-item"></li>
              </ul>
         </header>
         <div className="Mail-body"><img src={Mailimage} className="App-logo" width="250px height=250px" alt="logo" />
             </div>
             
         
         </div>
       );
  }
}



export default App;