import React from 'react';

import Eagle from '../images/photography/IMGP6915-1405412511-O.jpg';
import Kina from '../images/photography/kina.jpg';
import BigSurWaterfall from '../images/photography/IMGP7651.jpg';
import BigSurBridge from '../images/photography/IMGP7718.jpg';
import Cereal from '../images/photography/Copy of IMGP8069.jpg';
import MtDiablo from '../images/photography/Copy of MtDiabloHDR2.jpg';

import '../stylesheets/photography.scss';

class Photography extends React.Component {
   render() {
      return (
         <div className="photography">
            <img src={Eagle} className="currentPic"/>
            <img src={Kina}/>
            <img src={BigSurWaterfall}/>
            <img src={BigSurBridge}/>
            <img src={Cereal}/>
            <img src={MtDiablo}/>
         </div>
      );
   }
}

export default Photography;
