import React from 'react';

import TopBanner from './TopBanner';

import uber1 from "../images/uber/uber1.mp4";
import option1 from "../images/uber/option1.png";
import option2 from "../images/uber/option2.png";
import option3 from "../images/uber/option3.png";
import option4 from "../images/uber/option4.png";
import uberProtoSmall from "../images/uber/UberPrototypeSmall.mp4";
import uberPrinciple from "../files/uber/uberPrinciple.prd";
import uberMac from "../files/uber/uberMac.zip";
import uberVideo from "../files/uber/uberVideo.mov";
import uberFlowDiagram from "../images/uber/uberFlowDiagram.png";
import uberHeader from '../images/uber/uberBackgroundGraphic.svg';

import '../stylesheets/uber.scss';

class Uber extends React.Component {
   render() {
      return (
         <div className="uber">
            <div className="innerWrapper">
             <TopBanner image={uberHeader} bgColor="#0A2F3C" arrowColor="#e8feff"/>
             <div className="section" id="main">
               <div className="sectionContent">
                  <h1>Uber: Navigating with the Map</h1>
                  <p className="highlightedText">My friend Kevin calls me. “What are you up to right now? You should come over!”. I agree, pull out my phone, and open up the Uber app. <b>Ugh, whats his address again</b>, I thought? Ive been there a thousand times but I just can’t remember his address.</p>
                  <h4 className="galleryHeader">My Idea</h4>
                  <p>Sometimes you know where you want to go but you dont know the address. My solution to this problem was to be able to just pick a point on the map where you want to go and be able to get an Uber there.</p>
                  <h2>Problems with Current Design</h2>
                  <h4 className="galleryHeader">Usertesting</h4>
                  <p>
                    The first thing I did when takling this issue was run usertests on the current app. Usertesting alows you to get a sense of what user’s insticts are and what they intuitivley want to do when presented with a task.
                    <br /><br />
                    All I did was ask users the following prompt:<br />
                    “Suppose you forgot the address to your own house. Try to navigate there using Uber.”
                    <br /><br />
                    I usertested 5 people and here is what they did:<br />
                    - Only 1 person was able to find the current way to do this<br />
                    - 4 out of the 5 people's first instict was to tap on the map<br />
                    - Those 4 people's second instict was to dig through the menu system.
                  </p>
                  <div className="row" id="dragDown">
                    <div className="col">
                      <h4 className="galleryHeader">Discoverability</h4>
                      <p>
                        Going into this redesign I was under the impression that you couldn’t uber to a point on the map. This is because the current method to do this is super hidden.
                        <br /><br />
                        First you click the search bar, then you are provided with a normal looking search page. You are supposed to drag down to reveal a map where you can then place a pin for your destination.
                        <br /><br />
                        During usertesting no one was able to find this feature.
                      </p>
                      <h4 className="galleryHeader">Too Many Steps</h4>
                      <p>
                        The other main issue with the current approach was how many steps it took to do this simple task.
                        <br /><br />
                        Assuming the user knows how to use this feature it would take a click, a swipe down, a drag, and then another click just to pick a spot on the map.
                      </p>
                    </div>
                    <div className="col">
                      <video id="oldUber" autoPlay loop playsInline muted>
                        <source src={uber1} type="video/mp4" />
                        Your browser does not support videos :(
                      </video>
                    </div>
                  </div>
                  <h2>Designing a New Interaction</h2>
                  <p>Through usertesting, I realized that a most people’s instict was to just try clicking a spot on the map to navigate there. This made a ton of sense to me and became the premise of my redesign.</p>
                  <h4 className="galleryHeader">Step 1: “Wireframe” basic flow</h4>
                  <p>Normally I would NEVER wireframe the entire flow this early. However, after usertesting, this basic flow felt very obvious and there was no point in putting this off.</p>
                  <img src={uberFlowDiagram} />
                  <h4 className="galleryHeader">Step 2: Explore Options</h4>
                  <p>Because I didnt want to redesign the entire app, most of the design work happened on the second screen. I created a bunch of low fidelity mocks and analyzed the pros and cons of each. These were the designs that stood out:</p>
               </div>
               <div className="horizGallery">
                  <div className="imgWrapper">
                    <img src={option1} />
                    <img src={option2} />
                    <img src={option3} />
                    <img src={option4} />
                  </div>
                  <div className="close">x</div>
               </div>
               <div className="sectionContent">
                  <div className="row">
                    <div className="col">
                      <p>I ended up picking option 3 for a couple reasons. The main reason was that it was able to hide all the elements that didnt serve a purpose when you are scrolling around the map. It kept the question of “Where to?” on the screen and it kept the advertising card while hiding everything else.</p>
                      <h4 className="galleryHeader">Step 3: High-Fidelity Mockups</h4>
                      <p>The next step was just to recreate the Uber app in sketch. I remade all the UI elements from scratch and designed all the screens. This step was all about getting the details right.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" id="step4">
                      <h4 className="galleryHeader">Step 4: Create Interactive Prototype with Principle</h4>
                      <p id="uberPrototypePara">Finally I used principle to create the final prototype. Here is the final product:</p>
                    </div>
                    <div className="col">
                      <video id="uberPrototype" autoPlay loop playsInline muted>
                        <source src={uberProtoSmall} type="video/mp4" />
                        Your browser does not support videos :(
                      </video>
                    </div>
                  </div>
               </div>
               <div id="uberFooter">
                  <div className="sectionContent">
                    <h4>Download Prototype:</h4>
                    <a id="principleUber" href={uberPrinciple} download>Principle File</a>
                    <a id="macUber" href={uberMac} download>Mac App</a>
                    <a id="movieUber" href={uberVideo} download>Video</a>
                  </div>
               </div>
             </div>
            </div>
         </div>


      );
   }
}

export default Uber;
