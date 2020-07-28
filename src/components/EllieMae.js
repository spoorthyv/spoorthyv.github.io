import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../images/elliemae/elliemae-color.png";

import { ReactComponent as BackArrow} from "../images/backArrow.svg";

import '../stylesheets/elliemae.scss';

class EllieMae extends React.Component {
   render() {
      return (
         <div className="elliemae">
            <Link className="backArrow" to="/">
              <BackArrow/>
            </Link>
           <div className="innerWrapper">
             <div className="section">
               <div className="sectionContent">
                 <div id="header">
                   <img src={logo} />
                   <div id="headerDetails">
                     <h5>
                       UI Engineering Intern<br />
                       June 2017 - Sep 2017
                     </h5>
                   </div>
                 </div>
                 <h4>The Company</h4>
                 <p>
                   <a href="https://elliemae.com/">Ellie Mae</a> builds software that helps automate over 1/3 of all mortages in the US.
                   Currently the company is working on creating a brand new web app version of their legacy desktop app called <a href="https://elliemae.com/about/news-reports/press-releases/ellie-mae-announces-encompass-webcenter-a-nextgeneration-web-site-for-mortgage-originators">Encompass Web</a>.
                 </p>
                 <h4>My Role</h4>
                 <p>
                   For the first 9 weeks of my internship I worked as a UI Engineering Intern helping build the frontend of our web app in Angular JS. I helped build a feature called task inbox
                   which notifies users of any issues with their loans. <br /><br />
                   For the last 3 weeks of my internship I worked with the UX Design team to better integrate our style guide into our frontend development teams workflow.
                   I built a web version of our sketch style guide that any developer could access.
                 </p>
                 <h4>More Info</h4>
                 <p>
                   Unfortunatly I cant say much more about my work  😕. Please <a href="./contact"><b>contact me</b></a> if you want to see more.
                 </p>
               </div>
             </div>
           </div>
         </div>

      );
   }
}

export default EllieMae;
