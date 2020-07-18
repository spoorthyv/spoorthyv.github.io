import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SayHi} from '../images/contact/comesayhi.svg';
import { ReactComponent as Email} from '../images/contact/email.svg';
import { ReactComponent as Github} from '../images/contact/github.svg';
import { ReactComponent as Linkedin} from '../images/contact/linkedin.svg';
import { ReactComponent as Twitter} from '../images/contact/twitter.svg';
import { ReactComponent as GreenRect} from '../images/contact/greenskewedrect.svg';
import { ReactComponent as GreyCirc} from '../images/contact/greycircle.svg';
import { ReactComponent as OrangeCirc} from '../images/contact/orangecircle.svg';
import { ReactComponent as RedCirc} from '../images/contact/redcircle.svg';
import { ReactComponent as BlueTri} from '../images/contact/bluetriangle.svg';


import '../stylesheets/contact.scss';

class Contact extends React.Component {
   openInNewTab(url) {
      var win = window.open(url, '_blank');
      if (win != null) {
         win.focus();
      }
   }

   render() {
      return (
         <div id="contact">
            <div id="contentWrapper">
               <div id="content">
                  <SayHi/>
                  <div id="links">
                     <a href='mailto:spoorthyvemula@gmail.com' target="_blank">
                        <Email/>
                     </a>
                     <a href='http://www.linkedin.com' target="_blank">
                        <Linkedin/>
                     </a>
                     <a href='https://github.com/spoorthyv' target="_blank">
                        <Github/>
                     </a>
                     <a href='https://twitter.com/spoorthyvemula' target="_blank">
                        <Twitter/>
                     </a>
                  </div>
               </div>

               <GreenRect/>
               <GreyCirc/>
               <OrangeCirc/>
               <RedCirc/>
               <BlueTri/>
            </div>
         </div>
      );
   }
}

export default Contact;
