import React from 'react';
import { CSSTransition } from 'react-transition-group'

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

import { ReactComponent as Send} from '../images/contact/send.svg';
import { ReactComponent as Copy} from '../images/contact/copy.svg';

import '../stylesheets/contact.scss';

class Contact extends React.Component {
   state = { popupIsShown: false, emailIsCopied: false };

   openInNewTab(url) {
      var win = window.open(url, '_blank');
      if (win != null) {
         win.focus();
      }
   }

   clickCopy() {
      this.setState({ emailIsCopied: true });
      navigator.clipboard.writeText("spoorthyvemula@gmail.com");
   }

   renderPopup() {
      return (
         <CSSTransition
            in={this.state.popupIsShown}
            timeout={90}
            classNames="popup"
            unmountOnExit
         >
             <div id="popup" key={0}>
                <h5 className="menuItem">spoorthyvemula@gmail.com</h5>
                <div className="menuItem" onClick={() => this.clickCopy()}>
                   <Copy/>
                   <p>{this.state.emailIsCopied ? 'Copied!' : 'Copy Email Address'}</p>
                </div>
                <div className="menuItem" onClick={() => this.openInNewTab("mailto:spoorthyvemula@gmail.com")}>
                   <Send/>
                   <p>Send Email</p>
                </div>
             </div>
          </CSSTransition>
      );
   }

   render() {
      return (
         <div id="contact">
            <div id="contentWrapper">
               <div id="content">
                  <SayHi/>
                  <div id="links">
                     <div>
                        {this.renderPopup()}
                        <a onClick={() => this.setState({ popupIsShown: !this.state.popupIsShown })}>
                           <Email/>
                        </a>
                     </div>
                     <div>
                        <a href='https://www.linkedin.com/in/spoorthy-vemula-7412b5a7/' target="_blank" rel="noopener noreferrer">
                           <Linkedin/>
                        </a>
                     </div>
                     <div>
                        <a href='https://github.com/spoorthyv' target="_blank" rel="noopener noreferrer">
                           <Github/>
                        </a>
                     </div>
                     <div>
                        <a href='https://twitter.com/spoorthyvemula' target="_blank" rel="noopener noreferrer">
                           <Twitter/>
                        </a>
                     </div>
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
