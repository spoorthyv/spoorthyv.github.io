import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';

class TopBanner extends React.Component {
   render(props) {
      const { bgColor, image, arrowColor } = this.props;

      var style = {
         backgroundColor: bgColor,
         backgroundImage: `url(${image})`
      };

      return (
         <div className="topBanner" style={style}>
            <Link className="backArrow" to="/">
               <IconArrowLeft color={arrowColor} size={28} stroke={2} />
            </Link>
         </div>
      );
   }
}

export default TopBanner;
