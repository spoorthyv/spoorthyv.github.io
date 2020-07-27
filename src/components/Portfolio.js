import React from 'react';

import { Link } from 'react-router-dom';

import squidLogo from '../images/squid/squidlogo.svg';
import ebayLogo from '../images/ebay/ebay.svg';
import uberLogo from '../images/uber/uberWhite.svg';
import jupyterLogo from '../images/jupyter/jupyter.svg';
import dribbbleLogo from '../images/dribbble/dribbble.svg';
import showerLogo from '../images/fiveMinShower/ShowerIcon.png';
import ellieMaeLogo from '../images/elliemae/elliemae.png';
import blank from '../images/photography/blank.png';

import '../stylesheets/portfolio.scss';

const projects = [
   {
      id: "squid",
      title: 'Squid Notes',
      description: "Redesigning the best notes app on Android",
      color: "#00abcc",
      type: "Work",
      logo: squidLogo
   },
   {
      id: "ebay",
      title: 'Ebay',
      description: "My work as a UX Design Systems Intern",
      color: "#0081F8",
      type: "Work",
      logo: ebayLogo
   },
   {
      id: "uber",
      title: 'Uber Case Study',
      description: "Find your destination with the map",
      color: "#0A2F3C",
      type: "Project",
      logo: uberLogo
   },
   {
      id: "jupyter",
      title: 'Project Jupyter',
      description: "My work as a UI/UX Designer and Software Engineer",
      color: "#FF9445",
      type: "Work",
      logo: jupyterLogo
   },
   {
      id: "dribbble",
      title: 'Dribbble',
      description: "Some quick shots I've made",
      color: "#EE5691",
      type: "Other",
      logo: dribbbleLogo
   },
   {
      id: "fiveMinShower",
      title: '5 Min Shower',
      description: "A musical shower timer with an attitude",
      color: "#9CCAE9",
      type: "Project",
      logo: showerLogo
   },
   {
      id: "ellieMae",
      title: 'Ellie Mae',
      description: "UI Engineering Intership with React JS",
      color: "#0065AE",
      type: "Work",
      logo: ellieMaeLogo
   },
   {
      id: "photography",
      title: 'Photography',
      description: "",
      color: "#b01398",
      type: "Other",
      logo: blank
   },
];

class Portfolio extends React.Component {
   renderList() {
      return projects.map(project => {
         return (
            <Link className="card" to={`/${project.id}`} style={{backgroundColor: project.color}} id={project.id} key={project.id} >
               <p className={`label ${project.type}`}>{project.type}</p>
               <div className="imageWrapper">
                  <img className="cardImage" src={project.logo} />
               </div>
               <div className="textWrapper">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
               </div>
            </Link>
         );
      });
   }
   render() {
      return (
         <div id="portfolio">
            <div id="portfolioBody">
               <h3 id="header">Here's what I've been working on:</h3>
               <div id="cardGrid">
                  {this.renderList()}
               </div>
            </div>
         </div>
      );
   }
}

export default Portfolio;
