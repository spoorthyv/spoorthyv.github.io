import React from 'react';
import { InView } from 'react-intersection-observer';

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
      return images.map((image, index) => {
         return (
            <InView rootMargin="-300px 0px" key={index}>
               {({ inView, ref }) => (
                  <img ref={ref} src={image} className={inView ? 'currentPic' : ''} />
               )}
            </InView>
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
