import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Squid from './Squid';
import Ebay from './Ebay';
import Uber from './Uber';
import Jupyter from './Jupyter';
import FiveMinShower from './FiveMinShower';
import Photography from './Photography';
import Peloton from './Peloton';

const FadeTransition = ({ children, ...props }) => {
   const nodeRef = React.useRef(null);
   return (
      <CSSTransition {...props} nodeRef={nodeRef}>
         <section ref={nodeRef} className="route-section">
            {children}
         </section>
      </CSSTransition>
   );
};

class ContentWrapper extends React.Component {
   isMainPage(currentRoute) {
      return ['/', '/contact', '/resume'].includes(this.props.location.pathname);
   }

   constructor(props) {
      super(props)
      this.myRef = React.createRef()
   }

   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         this.myRef.current.scrollTop = 0;
      }
   }

   render() {
      return (
         <div id="wrapper" className={this.isMainPage() ? 'bigNav' : 'smallNav'} ref={this.myRef}>
            <TransitionGroup className="transition-group">
               <FadeTransition
                  key={this.props.location.key}
                  timeout={{ enter: 600 }}
                  classNames="fade"
               >
                  <Switch location={this.props.location}>
                     <Route exact path="/" component={Portfolio} />
                     <Route path="/resume" component={Resume} />
                     <Route path="/contact" component={Contact} />
                     <Route path="/squid" component={Squid} />
                     <Route path="/ebay" component={Ebay} />
                     <Route path="/uber" component={Uber} />
                     <Route path="/jupyter" component={Jupyter} />
                     <Route path="/fiveMinShower" component={FiveMinShower} />
                     <Route path="/photography" component={Photography} />
                     <Route path="/peloton" component={Peloton} />
                  </Switch>
               </FadeTransition>
            </TransitionGroup>
         </div>
      );
   }
}

export default withRouter(ContentWrapper);
