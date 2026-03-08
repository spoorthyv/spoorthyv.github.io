import React from 'react';
import { CSSTransition } from 'react-transition-group'

import { ReactComponent as SayHi } from '../images/contact/comesayhi.svg';
import { ReactComponent as Email } from '../images/contact/email.svg';
import { ReactComponent as Github } from '../images/contact/github.svg';
import { ReactComponent as Linkedin } from '../images/contact/linkedin.svg';
import { ReactComponent as Instagram } from '../images/contact/instagram.svg';

import { ReactComponent as SkewedRect } from '../images/shapes/skewedrect.svg';
import { ReactComponent as Circle } from '../images/shapes/circle.svg';
import { ReactComponent as Triangle } from '../images/shapes/triangle.svg';


import { ReactComponent as Copy } from '../images/contact/copy.svg';

import '../stylesheets/contact.scss';

class Contact extends React.Component {
   state = { popupIsShown: false, emailIsCopied: false };
   popupRef = React.createRef();



   clickCopy() {
      this.setState({ emailIsCopied: true });
      navigator.clipboard.writeText("spoorthyvemula@gmail.com");
   }

   renderPopup() {
      return (
         <CSSTransition
            in={this.state.popupIsShown}
            timeout={200}
            classNames="popup"
            unmountOnExit
            nodeRef={this.popupRef}
         >
            <div id="popup" key={0} ref={this.popupRef}>
               <h5 className="menuItem">spoorthyvemula@gmail.com</h5>
               <div className="menuItem" onClick={() => this.clickCopy()}>
                  <Copy />
                  <p>{this.state.emailIsCopied ? 'Copied!' : 'Copy Email Address'}</p>
               </div>

            </div>
         </CSSTransition>
      );
   }

   render() {
      return (
         <div id="contact">
            {this.state.popupIsShown && (
               <div id="background" onClick={() => this.setState({ popupIsShown: false })}></div>
            )}
            <div id="contentWrapper">
               <div id="content">
                  <SayHi />
                  <div id="links">
                     <div>
                        {this.renderPopup()}
                        <a href="#email" onClick={(e) => { e.preventDefault(); this.setState({ popupIsShown: !this.state.popupIsShown }); }}>
                           <Email />
                        </a>
                     </div>
                     <div>
                        <a href='https://www.linkedin.com/in/spoorthyv/' target="_blank" rel="noopener noreferrer">
                           <Linkedin />
                        </a>
                     </div>
                     <div>
                        <a href='https://github.com/spoorthyv' target="_blank" rel="noopener noreferrer">
                           <Github />
                        </a>
                     </div>
                     <div>
                        <a href='https://www.instagram.com/spoorthyv/' target="_blank" rel="noopener noreferrer">
                           <Instagram />
                        </a>
                     </div>
                  </div>
               </div>

               <SkewedRect id="SkewedRect" />
               <Circle id="Circle1" />
               <Circle id="Circle2" />
               <Circle id="Circle3" />
               <Triangle id="Triangle" />
            </div>
         </div>
      );
   }
}

export default Contact;
