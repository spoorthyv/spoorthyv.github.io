import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Eagle from '../images/photography/IMGP6915-1405412511-O.jpg';
import Kina from '../images/photography/kina.jpg';
import BigSurWaterfall from '../images/photography/IMGP7651.jpg';
import BigSurBridge from '../images/photography/IMGP7718.jpg';
import Cereal from '../images/photography/Copy of IMGP8069.jpg';
import MtDiablo from '../images/photography/Copy of MtDiabloHDR2.jpg';

import '../stylesheets/photography.scss';

var images = [Eagle, Kina, BigSurWaterfall, BigSurBridge, Cereal, MtDiablo];

class Photography extends React.Component {
   renderImageList() {
      return images.map(image => {
         return (
            <VisibilitySensor offset={{top:300, bottom: 300}} partialVisibility={true}>
               {({isVisible}) =>
                  <img src={image} className={isVisible ? 'currentPic' : ''}/>
               }
            </VisibilitySensor>
         );
      });
   }

   render() {
      return (
         <div className="photography">
            {this.renderImageList()}
         </div>
      );
   }
}

export default Photography;
