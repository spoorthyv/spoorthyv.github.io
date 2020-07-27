import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group'


import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Squid from './Squid';

const routes = [
  { path: '/', name: 'Portfolio', Component: Portfolio },
  { path: '/about', name: 'Resume', Component: Resume },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/squid', name: 'Squid', Component: Squid },
]

class ContentWrapper extends React.Component {
   isMainPage(currentRoute) {
      return ['/', '/contact', '/resume'].includes(this.props.location.pathname);
   }

   render() {
      return (
         <div id="wrapper" className={this.isMainPage() ? 'bigNav' : 'smallNav'}>
            <TransitionGroup className="transition-group">
               <CSSTransition
               key={this.props.location.key}
               timeout={{ enter: 600 }}
               classNames="fade"
               >
                  <section className="route-section">
                     <Switch location={this.props.location}>
                        <Route exact path="/" component={Portfolio} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/squid" component={Squid} />
                     </Switch>
                  </section>
               </CSSTransition>
            </TransitionGroup>
         </div>
      );
   }
}

export default withRouter(ContentWrapper);
