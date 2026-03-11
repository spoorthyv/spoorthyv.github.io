import React from 'react';

import Card from './Card';
import FilterBar from './FilterBar';
import { IconHeartFilled, IconBrandReact, IconSparklesFilled } from '@tabler/icons-react';

import squidLogo from '../images/squid/squidlogo.svg';
import ebayLogo from '../images/ebay/ebay.svg';
import uberLogo from '../images/uber/uberWhite.svg';
import jupyterLogo from '../images/jupyter/jupyter.svg';
import dribbbleLogo from '../images/dribbble/dribbble.svg';
import showerLogo from '../images/fiveMinShower/ShowerIcon.png';
import pelotonLogo from '../images/peloton/peloton.svg';
import blank from '../images/photography/blank.png';

import { ReactComponent as SkewedRect } from '../images/shapes/skewedrect.svg';
import { ReactComponent as Circle } from '../images/shapes/circle.svg';
import { ReactComponent as Triangle } from '../images/shapes/triangle.svg';
import { ReactComponent as Square } from '../images/shapes/square.svg';

import '../stylesheets/portfolio.scss';

const projects = [
   {
      id: "peloton",
      title: 'Peloton, Music',
      description: "My work as a Product Designer for 6 years",
      color: "#181a1d",
      type: "Work",
      logo: pelotonLogo
   },
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
      id: "jupyter",
      title: 'Project Jupyter',
      description: "My work as a UI/UX Designer and Software Engineer",
      color: "#FF9445",
      type: "Work",
      logo: jupyterLogo
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
      id: "dribbble",
      title: 'Dribbble',
      description: "Some quick shots I've made",
      color: "#EE5691",
      type: "Project",
      logo: dribbbleLogo,
      link: "https://dribbble.com/spoorthyv"
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
      if (this.state.filter === term) {
         this.setState({ filter: "" });
      } else {
         this.setState({ filter: term });
      }
   }

   componentDidMount() {
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.addEventListener('scroll', this.handleScroll);
      }
   }

   componentWillUnmount() {
      const wrapper = document.getElementById('wrapper');
      if (wrapper) {
         wrapper.removeEventListener('scroll', this.handleScroll);
      }
   }

   handleScroll = () => {
      if (this.ticking) return;
      this.ticking = true;
      requestAnimationFrame(() => {
         const wrapper = document.getElementById('wrapper');
         if (!wrapper) {
            this.ticking = false;
            return;
         }

         const scrollY = wrapper.scrollTop;
         const skewedRect = document.getElementById('SkewedRect');
         const circle1 = document.getElementById('Circle1');
         const circle2 = document.getElementById('Circle2');
         const circle3 = document.getElementById('Circle3');
         const circle4 = document.getElementById('Circle4');
         const triangle = document.getElementById('Triangle');
         const square = document.getElementById('Square');

         if (skewedRect) skewedRect.style.transform = `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.1}deg`;
         if (circle1) circle1.style.transform = `translateY(${scrollY * 0.1}px)`;
         if (circle2) circle2.style.transform = `translateY(${scrollY * 0.05}px)`;
         if (circle3) circle3.style.transform = `translateY(${scrollY * -0.075}px)`;
         if (circle4) circle4.style.transform = `translateY(${scrollY * 0.5}px)`;
         if (triangle) triangle.style.transform = `translateY(${scrollY * -0.13}px) rotate(${60 + scrollY * -0.005}deg)`;
         if (square) square.style.transform = `translateY(${scrollY * -0.04}px) rotate(${scrollY * -0.18}deg)`;

         this.ticking = false;
      });
   }

   renderCards() {
      return projects.filter(project => {
         return project.type.includes(this.state.filter)
      })
         .map(project => {
            return (
               <Card project={project} key={project.id} />
            );
         });
   }

   render() {
      return (
         <div id="portfolio">
            <div id="portfolioBody">
               <div id="cardGrid">
                  <div id="headerWrapper">
                     <h3 id="header">Here's what I've been working on:</h3>
                     <FilterBar clickHandler={this.setFilter} currFilter={this.state.filter} />
                  </div>
                  {this.renderCards()}
               </div>
            </div>
            <div id="footer">
               <a href="https://github.com/spoorthyv/spoorthyv.github.io" target="_blank" rel="noopener noreferrer">
                  <h4>Built with <span className="iconTooltip" data-tooltip="Love"><IconHeartFilled id="heartIcon" size={16} /></span> from scratch using <span className="iconTooltip" data-tooltip="React"><IconBrandReact id='reactIcon' size={18} /></span> with the help of a little <span className="iconTooltip" data-tooltip="AI"><IconSparklesFilled id='sparklesIcon' size={18} /></span></h4>
               </a>
            </div>
            <SkewedRect id="SkewedRect" />
            <Circle id="Circle1" />
            <Circle id="Circle2" />
            <Circle id="Circle3" />
            <Circle id="Circle4" />
            <Triangle id="Triangle" />
            <Square id="Square" />
         </div>
      );
   }
}

export default Portfolio;
