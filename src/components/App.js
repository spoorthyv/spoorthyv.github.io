import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'

import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Squid from './Squid';

import '../stylesheets/App.scss';

class App extends React.Component {

   render() {
      return (
         <div id="App">
            <Router history={history}>
               <Navbar/>
               <div id="wrapper">
                  <Switch>
                     <Route path="/" exact component={Portfolio} />
                     <Route path="/resume" exact component={Resume} />
                     <Route path="/contact" exact component={Contact} />
                     <Route path="/squid" exact component={Squid} />
                  </Switch>
               </div>
            </Router>
         </div>
      );
   }
}

export default App;
