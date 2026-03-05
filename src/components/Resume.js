import React from 'react';

import resumePDF from '../files/resume.pdf';
import resumeIMG from '../images/resume/resume.png';
import downloadCloud from '../images/resume/downloadCloud.svg';

import '../stylesheets/resume.scss';

class Resume extends React.Component {
   render() {
      return (
         <div id="resume">
            <div className="contentWrapper">
               <img src={resumeIMG}/>
               <a id="dlResumeButton" href={resumePDF}download>
                  Download Resume
                  <img src={downloadCloud}/>
               </a>
            </div>
         </div>
      );
   }
}

export default Resume;
