import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../stylesheets/navbar.scss';

class Navbar extends React.Component {
   isMainPage() {
      return ['/', '/contact', '/resume'].includes(this.props.location.pathname);
   }

   getNavbarClass() {
      var classStr = "";

      if (!['/', '/contact', '/resume'].includes(this.props.location.pathname)) {
         classStr = classStr.concat("smallNav");
      }

      if (['/photography'].includes(this.props.location.pathname)) {
         classStr = classStr.concat(" darkNav");
      }

      return classStr;
   }

   render() {
      return (
         <div id="navbar" className={this.getNavbarClass()}>
            <div id="navBackground"></div>
            <div id="titles">
               <h3>Hi, I'm</h3>
               <h2>Spoorthy Vemula</h2>
               <h3>I'm a UI/UX Designer & Developer</h3>
            </div>
            <div id="linkWrapper">
               <NavLink to="/" activeClassName="active" exact>Portfolio</NavLink>
               <NavLink to="/resume" activeClassName="active" exact>Resume</NavLink>
               <NavLink to="/contact" activeClassName="active" exact>Contact</NavLink>
            </div>
            <div id="logoWrapper">
               <a id="logo" href="/"></a>
            </div>
         </div>
      );
   }
}

export default withRouter(Navbar);
