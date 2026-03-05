import React from 'react';

import TopBanner from './TopBanner';

import lightBulb from "../images/ebay/lightbulb.svg";
import rightArrow from "../images/rightArrow.svg";
import mehIcon from "../images/ebay/mehIcon.svg";
import goodIcon from "../images/ebay/goodIcon.svg";
import badIcon from "../images/ebay/badIcon.svg";
import fullProto from "../files/SSFFullProto.mp4";
import ebayHeader from '../images/ebay/ebayBanner.svg';

import '../stylesheets/ebay.scss';


class Ebay extends React.Component {
   render() {
      return (
         <div className="ebay">
           <div className="innerWrapper">
             <TopBanner image={ebayHeader} bgColor="#0081F8" arrowColor="#C8FFE7"/>
             <div className="section">
               <div className="sectionContent">
                 <h2>Overview</h2>
                 <p>
                   Last Summer I worked as a <b>UX Design Intern</b> for eBay’s <b>Design Sytems</b> team. Traditionally eBay has not had a cohesive
                   design language. Our team was responsible for creating a fully
                   components-based design system and, in the process, a fresh new design
                   language. I created 2 different patterns for this team: Empty States
                   and Filtering for mobile devices.
                 </p>
                 <h2>Filtering on Mobile Devices</h2>
                 <p>
                   With this project I had to create a pattern for filtering a list of
                   items/results on mobile devices. I needed to create logic and
                   consistency across all our different pages. After that it was up to me
                   to decide what to prioritize and what to change.
                 </p>
                 <h4>Step 1A: Internal Research</h4>
                 <div id="lightbulbBanner">
                   <img src={lightBulb}/>
                   <p>
                     For me, understanding the current state of your own product is the
                     most important step to designing a pattern that scales across every
                     situation where your pattern may be used.
                   </p>
                 </div>
                 <p>
                   I spent a little over a week combing through both of ebay’s mobile
                   apps and the mobile website, collecting screenshots, and talking to
                   designers in every design team that I could think of that may get
                   effected/benefit from my work on the filtering pattern. I came out of
                   the internal research with 2 goals: <b>increase consistency</b> and
                   <b>filter usage</b>.
                 </p>
                 <h4>Step 1B: External Research</h4>
                 <p>
                   The next thing I did was analyze what other companies were doing with
                   their mobile filtering UIs. My goal here was to understand what
                   scenarios their filter patterns were used in, which tradeoffs they
                   made, and why they made those tradeoffs. Basically, I wanted to figure
                   out every option that I might need to consider in my own designs.
                   <br />
                   <br />I gathered screenshots from 20 different company’s mobile apps
                   and mobile websites and analyzed their filtering mechanisms in browse
                   pages and search pages. It took me 3-4 days to go through over 350
                   screenshots and distill down my thoughts into a couple different
                   findings. I presented my research to a couple different stakeholders
                   using the slide deck below:
                 </p>
                 <a
                   id="dlButton"
                   href="https://docs.google.com/presentation/d/1XJZuMjVv4DdViZdE-ye7nTdZLT1YTYIO6qy0q1ZyRFA/edit?usp=sharing"
                   target="_blank"
                 >
                   View Research Presentation
                   <img src={rightArrow} />
                 </a>
                 <h4>Step 2: Design Exploration</h4>
                 <p>
                   This step is where creativity comes in (methodical creativity). My
                   goal here is to make sure that I’ve considered every possible option
                   that makes any sort of sense.
                   <br />
                   <br />
                   First I weighed the pros and cons of every type of filtering UI that I
                   saw in my external research and tried to understand how they would
                   affect our 2 main goals. I decided that a{" "}
                   <b>pill-based filtering UI</b>
                   {"{"}" "{"}"}
                   would be the way to go.
                 </p>
                 <div id="proconChart">
                   <h4>A pill filtering system would:</h4>
                   <div>
                     <p>Find a filter you already have in mind</p>
                     <img src={mehIcon} />
                   </div>
                   <div>
                     <p>Discover what you should filter by</p>
                     <img src={goodIcon} />
                   </div>
                   <div>
                     <p>Remove filters you have applied</p>
                     <img src={goodIcon} />
                   </div>
                   <div>
                     <p>Edit filters you have applied</p>
                     <img src={goodIcon} />
                   </div>
                   <div>
                     <p>Dont add visual clutter &amp; distract from listings</p>
                     <img src={badIcon} />
                   </div>
                 </div>
                 <p>
                   From there I broke down the pill filtering into specific design parts:
                   placement, secondary buttons, highlighted filters, bottom overlay
                   content style, and bottom overlay pill bar style. For each category I
                   tried to come up with as many options as I could.
                 </p>
                 <h4>Step 3: Consolidation and Communication</h4>
                 <p>
                   Now I distilled all my wild options, into a few of the best options
                   for each part of the UI. I tried to compile a list of pros and cons
                   for each of these options and get really specific with my analysis.
                   After getting feedback from my team and tweaking my analysis, I again
                   went around to designers from different stakeholder teams across eBay
                   to get their opinion on things. This is the point where I made it a
                   point to get a lot of feedback from the accessibilty team and
                   developers on feasability and engineering constraints.
                 </p>
                 <h4>Step 4: Interaction Design and Visual Details</h4>
                 <p>
                   The last step before wrapping my pattern up was to iron out the little
                   details. With this pattern I really wanted to make sure the iteraction
                   of opening up the bottom container made sense and felt natural. I also
                   made it a point to finalize all the colors and icons.
                 </p>
               </div>
             </div>
             <div className="section" id="finalSSF">
               <div className="sectionContent">
                 <div className="row">
                   <div className="col" id="final">
                     <h4>The Final Product</h4>
                     <p>
                       At the end of this internship I provided sketch assets for every
                       part of this pattern that other designers could use and detailed
                       documentation on when and how to use this pattern.
                     </p>
                   </div>
                   <div className="col">
                     <video
                       id="ebayPrototype"
                       className="video"
                       autoPlay
                       loop
                       playsInline
                       muted
                     >
                       <source src={fullProto} type="video/mp4" />
                       Your browser does not support videos :(
                     </video>
                   </div>
                 </div>
               </div>
             </div>
             <div className="section" id="ebayFooter" />
           </div>
         </div>
      );
   }
}

export default Ebay;
