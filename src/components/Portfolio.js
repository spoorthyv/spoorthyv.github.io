import React from 'react';

import { Link } from 'react-router-dom';

import '../stylesheets/portfolio.scss';

class Portfolio extends React.Component {
   render() {
      return (
         <div>
            <h2>
               Portfolio
               <Link to="/squid">squid</Link>
            </h2>
         </div>
      );
   }
}

export default Portfolio;
