import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

import '../stylesheets/Navbar.scss';


class Navbar extends React.Component {

   isMainPage(currentRoute) {
      console.log(currentRoute);
      return ['/', '/contact', '/resume'].includes(currentRoute);
   }

   render() {
      return (
         <div id="navbar" className={this.isMainPage(this.props.location.pathname) ? 'expandNav' : 'shrinkNav'}>
            <div id="navBackground" className="animatedShort"></div>
            <div id="titles" className="animatedShort">
               <h3>Hi, I'm</h3>
               <h2>Spoorthy Vemula</h2>
               <h3>I'm a UI/UX Designer & Developer</h3>
            </div>
            <div id="linkWrapper" className="animatedShort">
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
