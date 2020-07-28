import React from 'react';
import { Link } from 'react-router-dom';

import showerMocks from "../images/fiveMinShower/showerMocks.jpg";

import { ReactComponent as BackArrow} from "../images/backArrow.svg";

import '../stylesheets/fiveMinShower.scss';

class FiveMinShower extends React.Component {
   render() {
      return (
         <div className="fiveMinShower">
            <div className="innerWrapper">
             <div className="section" id="header">
               <Link className="backArrow" to="/">
                  <BackArrow/>
               </Link>
               <div className="headerImage">
               </div>
             </div>
             <div className="section" id="main">
               <div className="sectionContent">
                  <h1>5 Min Shower</h1>
                  <p>5 Min Shower is an iOS app that me and 3 developers built at a hackathon (AngelHacks 2015). I worked as the sole designer for the app.</p>
                  <h4 className="galleryHeader">App Idea</h4>
                  <p>Build an app to help help users save water in the shower.</p>
                  <h4 className="galleryHeader">The Problem</h4>
                  <p>We needed to create an app that bugged users enough to get them out of the shower while still giving them a reason to keep coming back to our annoying app.</p>
                  <h4 className="galleryHeader">Our Solution</h4>
                  <p>A simple shower timer that plays music for you 5 minutes. If you take longer than that, the app plays ads to annoy you until you get out of the shower. If a user takes 5 successful showers they get to keep the ad.</p>
               </div>
               <div className="mockDescription">
                  <div className="sectionContent">
                    <h3 className="galleryHeader">Mockups</h3>
                  </div>
                  <img className="mockImage" src={showerMocks} />
               </div>
               <div className="sectionContent" id="finalProduct">
                  <h3 className="galleryHeader">Final Product</h3>
                  <p>After the hackathon, we released a <b>finished iOS app</b> to the app store. We had over 10,000 downloads after 12 months. Although its not on the app store anymore, here is a link to our code:</p>
                  <a href="https://github.com/SaagarGodithi/5minShower" target="_blank" className="githubButton" />
               </div>
             </div>
            </div>
         </div>
      );
   }
}

export default FiveMinShower;
