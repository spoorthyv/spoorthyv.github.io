import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconCopy } from '@tabler/icons-react';

import { ReactComponent as SayHi } from '../images/contact/comesayhi.svg';

import { ReactComponent as GreenRect } from '../images/contact/greenskewedrect.svg';
import { ReactComponent as GreyCirc } from '../images/contact/greycircle.svg';
import { ReactComponent as OrangeCirc } from '../images/contact/orangecircle.svg';
import { ReactComponent as RedCirc } from '../images/contact/redcircle.svg';
import { ReactComponent as BlueTri } from '../images/contact/bluetriangle.svg';

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
                  <IconCopy size={24} stroke={1.5} />
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
                        <a onClick={() => this.setState({ popupIsShown: !this.state.popupIsShown })}>
                           <IconMail size={28} stroke={1.5} />
                        </a>
                     </div>
                     <div>
                        <a href='https://www.linkedin.com/in/spoorthyv/' target="_blank" rel="noopener noreferrer">
                           <IconBrandLinkedin size={28} stroke={1.5} />
                        </a>
                     </div>
                     <div>
                        <a href='https://github.com/spoorthyv' target="_blank" rel="noopener noreferrer">
                           <IconBrandGithub size={28} stroke={1.5} />
                        </a>
                     </div>
                     <div>
                        <a href='https://www.instagram.com/spoorthyv/' target="_blank" rel="noopener noreferrer">
                           <IconBrandInstagram size={28} stroke={1.5} />
                        </a>
                     </div>
                  </div>
               </div>

               <GreenRect />
               <GreyCirc />
               <OrangeCirc />
               <RedCirc />
               <BlueTri />
            </div>
         </div>
      );
   }
}

export default Contact;
