import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/squid.scss';

import finishedVideo from "../files/FinishedDribbble.mp4";
import exampleNote from "../images/squid/exampleNote.png";
import importantFlow from "../images/squid/importantFlow.png";
import toolbox from "../images/squid/Toolbox.svg";
import longPress from "../images/squid/Long Press.svg";
import reorder from "../images/squid/Reorder.svg";
import penDetail from "../images/squid/Pen Detail.svg";
import toolbars from "../images/squid/Toolbars.svg";
import oldMenu from '../images/squid/Old menu.svg';
import newMenu from '../images/squid/New Menu.svg';
import pageSwitcher from '../images/squid/Page Switcher.svg';
import { ReactComponent as BackArrow} from "../images/backArrow.svg";

class Squid extends React.Component {
   render() {
      return (
         <div className="squid">
            <div className="innerWrapper">
               <div className="section" id="header">
                     <Link className="backArrow" to="/">
                           <BackArrow/>
                     </Link>
               </div>
               <div className="section" id="intro">
                  <div className="sectionContent">
                     <h1>Squid: Notes built for writing</h1>
                     <div className="row" id="summary">
                        <div className="col">
                           <h5>Duration</h5>
                           <p>6 months, July - December 2019</p>
                           <h5>Role</h5>
                           <p>Product Designer</p>
                           <h5>Location</h5>
                           <p>San Luis Obispo, CA</p>
                        </div>
                        <p>Squid is the #1 app for handwritten notes on Android with over 3 million downloads. After their last redesign 4 years ago, the team at Squid felt the app was starting to feel outdated and hired me to lead the effort for a major UI overhaul.</p>
                     </div>
                  </div>
               </div>
               <div className="section" id="finalpreview">
                  <video autoPlay loop muted playsInline>
                       <source src={finishedVideo} type="video/mp4"/>
                       Your browser does not support videos :(
                  </video>
                  <p className="caption">The redesigned note editor.</p>
               </div>
               <div className="section" id="research">
                     <div className="sectionContent">
                        <h3>Research:</h3>
                        <h2>Understanding big issues</h2>
                        <div className="row" id="gatheringInfo">
                           <div className="col">
                              <h1 className="fancyNumber">01</h1>
                           </div>
                           <div className="col" id="feedbackSite">
                              <h4>Gathering Information</h4>
                              <p>First thing I did was set up Firebase Analytics to start collecting quantitave information about our users. I combined that info with opinions I got from our long running <a href="http://feedback.squidnotes.com/" target="_blank">feature request</a> website and app reviews. Below is one of the most upvoted comments on the site:</p>
                              <h3 id="infoQuote"><i>“Why do I have to keep going back and forth through the menu when switching between colors, stroke size, etc?”</i></h3>
                           </div>
                        </div>
                        <div className="row" id="usertesting">
                           <div className="col">
                              <h1 className="fancyNumber">02</h1>
                           </div>
                           <div className="col" id="feedbackSite">
                              <h4>User-testing</h4>
                              <p>I ran 5 simple usertests with students in our library. We told each student to take notes on a 5 minute Youtube video using Squid and ended up with a lot of notes that looked like this:</p>
                           </div>
                        </div>
                        <div className="row" id="usertestingPic">
                           <div className="row">
                              <img src={exampleNote}/>
                              <div className="col">
                                 <h4>Notes tended to be:</h4>
                                 <h3>Monochromatic</h3>
                                 <h3>Light on media</h3>
                                 <h3>Detailed</h3>
                              </div>
                           </div>
                        </div>
                        <div className="row" id="why">
                           <div className="col">
                              <h1 className="fancyNumber">03</h1>
                              <h3>WHY?</h3>
                              <h4>
                                 Users run through 6 steps everytime they see important information.<br/><br/>
                                 Obviously underlining is easier.
                              </h4>
                           </div>
                           <div className="col">
                              <img src={importantFlow}/>
                           </div>
                        </div>
                     </div>
               </div>
               <div className="section" id="problem">
                  <h3><i>“How might we enable students to take more <b>expressive</b> notes?”</i></h3>
               </div>

               <div className="section col" id="designsTitle">
                  <h1>The Final Design</h1>
                  <div id="littleUnderline"></div>
               </div>
               <div id="designs">
                  <div className="section" id="toolbox">
                     <div className="sectionContent">
                        <div className="imageWrapper">
                           <img src={toolbox}/>
                        </div>
                     </div>
                  </div>
                  <div className="section" id="toolboxExtras">
                     <div className="sectionContent twoImage">
                        <div className="imageWrapper">
                           <img src={longPress}/>
                        </div>
                        <div className="imageWrapper">
                           <img src={reorder}/>
                        </div>
                     </div>
                  </div>
                  <div className="section" id="penDetail">
                     <div className="sectionContent">
                        <div className="imageWrapper">
                           <img src={penDetail}/>
                        </div>
                     </div>
                  </div>
                  <div className="section" id="toolbars">
                     <div className="sectionContent">
                        <div className="imageWrapper">
                           <img src={toolbars}/>
                        </div>
                     </div>
                  </div>
                  <div className="section" id="menus">
                     <div className="sectionContent twoImage">
                        <div className="imageWrapper">
                           <img src={oldMenu}/>
                        </div>
                        <div className="imageWrapper">
                           <img src={newMenu}/>
                        </div>
                     </div>
                  </div>
                  <div className="section" id="pageSwitcher">
                     <div className="sectionContent">
                        <div className="imageWrapper">
                           <img src={pageSwitcher}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="section" id="conclusion">
                  <div className="sectionContent">
                     <h4>I ended my 6 month contract by handing off the final designs with full design docs. The team is currently planning on implementing these designs after COVID slows down.</h4>
                  </div>
               </div>
            </div>
         </div>


      );
   }
}

export default Squid;
