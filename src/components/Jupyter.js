import React from 'react';
import { Link } from 'react-router-dom';

import JupyterTeam from "../images/jupyter/jupyterTeam.jpg";
import old from "../images/jupyter/old.png";
import newJ from "../images/jupyter/new.png";
import nbtoolbar from "../images/jupyter/nbtoolbar.png";
import top_nav from "../images/jupyter/top_navbar.png";
import files from "../images/jupyter/files.png";
import image from "../images/jupyter/image.png";
import terminal from "../images/jupyter/terminal.png";
import navbars from "../images/jupyter/navbars.png";

import { ReactComponent as BackArrow} from "../images/backArrow.svg";

import '../stylesheets/jupyter.scss';

class Jupyter extends React.Component {
   render() {
      return (
         <div className="jupyter">
            <div className="innerWrapper">
             <div className="section" id="header">
               <Link className="backArrow" to="/">
                  <BackArrow/>
               </Link>
             </div>
             <div className="section">
               <div className="sectionContent">
                  <h1>Project Jupyter</h1>
                  <h4>The Company</h4>
                  <p>
                    Jupyter is an open source organization that builds an interactive data science IDE used by over 30 million people around the world.
                  </p>
                  <h4>My Role</h4>
                  <p>
                    I worked at Jupyter as a hybrid UI/UX Designer and Front-end Engineer for 9 months.
                    I was part of a team of 4 designers and engineers and together we were tasked with designing and implementing solutions for all different Jupyter products.
                  </p>
               </div>
             </div>
             <img src={JupyterTeam} />
             <div className="section">
               <div className="sectionContent">
                  <h2>JupyterLab</h2>
                  <h4>The Project</h4>
                  <p>
                    My main job at Jupyter was to help build the next generation JupyterLab web application. The existing Jupyter Notebooks that all our users knew and loved allowed users to wirte and run code inline in an extremely visual and interactive way. JupyterLab builds around the notebook by adding commonly used developer tools (e.g. a terminal, file browser, text editor, etc.) in a multiwindow interface.<br /><br />
                    Our team’s job was to research, design, and develop overall interface improvement as well as JupyterLab's builtin plugins. The entire app was built with javascript using a custom framework called Phosphor.JS.<br /><br />
                    Widgets and parts of Jupyterlab I worked on: <br />
                    - Top navigation bar <br />
                    - Terminal <br />
                    - Image Viewer <br />
                    - Redid File Browser <br />
                    - Notebook widget toolbar <br />
                  </p>
                  <div className="galleria">
                    <img src={old} />
                    <img src={newJ} />
                    <img src={nbtoolbar} />
                    <img src={top_nav} />
                    <img src={files} />
                    <img src={image} />
                    <img src={terminal} />
                  </div>
               </div>
             </div>
             <div className="section">
               <div className="sectionContent">
                  <h2>Brand Guidelines</h2>
                  <h4>The Problem</h4>
                  <p>
                    The project was suffering from a lack of consistent brand messaging.
                    Everytime a Jupyter developer needed to create Jupyter branded content they had no clue where to get design assets.
                    This resulted in dozens of wierd logos for different products, random color choices, and overall unproffesional branding.
                  </p>
                  <h4>Our Solution</h4>
                  <p>
                    First we created a new version of the logo that consolidated the best parts of all the logos in circulation. Then we created the brand book below that lays out rules for the entire project on how to use the brand and logo in an official and beautiful document. Finally, I went through all our projects assets and fixed violations of these guidelines across all of Jupyter's products.
                  </p>
                  <object data="/files/jupyter_brand_guide.pdf" type="application/pdf" width="100%" height="460px" internalinstanceid={3} title>
                    <p id="none" />
                  </object>
               </div>
             </div>
             <div className="section">
               <div className="sectionContent">
                  <h2>Navbar</h2>
                  <h4>The Project</h4>
                  <p> Redesign the navbar to the project's website at <a href="www.jupyter.org">www.jupyter.org</a> </p>
                  <h4>Our Process</h4>
                  <ol>
                    <li> Gather info from Google Analytics  to learn what pages were important and which ones were getting ignored</li>
                    <li> Talk to community  to understand which pages were important to them</li>
                    <li> Organize data  and  create options  in excel</li>
                    <li> Pick 3 favorite options </li>
                    <li> Create high-fidelity prototypes  using sketch and invision</li>
                    <li> Usertest  favorite options</li>
                    <li> Refine  design</li>
                    <li> Usertest  new design</li>
                    <li> Implement  design</li>
                  </ol>
                  <div id="navbarImg">
                    <img src={navbars} />
                  </div>
               </div>
             </div>
            </div>
         </div>
      );
   }
}

export default Jupyter;
