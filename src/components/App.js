import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history'

import ContentWrapper from './ContentWrapper';
import Navbar from './Navbar';

import '../stylesheets/App.scss';

class App extends React.Component {
   render() {
      return (
         <div id="App">
            <Router history={history}>
               <Navbar/>
               <ContentWrapper/>
            </Router>
         </div>
      );
   }
}

export default App;
