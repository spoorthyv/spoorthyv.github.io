import React from 'react';

import { Link } from 'react-router-dom';

import Card from './Card';
import FilterBar from './FilterBar';

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
   state = { filter: "" };

   setFilter = (term) => {
      if (this.state.filter == term) {
         this.setState({ filter: "" });
      } else {
         this.setState({ filter: term });
      }
   }

   renderCards() {
      return projects.filter(project => {
         return project.type.includes(this.state.filter)
      })
      .map(project => {
         return (
            <Card project={project}/>
         );
      });
   }

   render() {
      return (
         <div id="portfolio">
            <div id="portfolioBody">
               <h3 id="header">Here's what I've been working on:</h3>
               <FilterBar clickHandler={this.setFilter} currFilter={this.state.filter}/>
               <div id="cardGrid">
                  {this.renderCards()}
               </div>
            </div>
         </div>
      );
   }
}

export default Portfolio;
