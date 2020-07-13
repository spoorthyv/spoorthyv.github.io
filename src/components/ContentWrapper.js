import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';

import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Squid from './Squid';

class ContentWrapper extends React.Component {
   isMainPage(currentRoute) {
      return ['/', '/contact', '/resume'].includes(this.props.location.pathname);
   }

   render() {
      return (
         <div id="wrapper" className={this.isMainPage() ? 'bigNav' : 'smallNav'}>
            <AnimatedSwitch
               atEnter={{ opacity: 0 }}
               atLeave={{ opacity: 0 }}
               atActive={{ opacity: 1 }}
               className="route-wrapper"
            >
               <Route path="/" exact component={Portfolio} />
               <Route path="/resume" exact component={Resume} />
               <Route path="/contact" exact component={Contact} />
               <Route path="/squid" exact component={Squid} />
            </AnimatedSwitch>
         </div>
      );
   }
}

export default withRouter(ContentWrapper);
