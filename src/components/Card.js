import React from 'react';

import { Link } from 'react-router-dom';

class Card extends React.Component {
   render(props) {
      const { id, color, type, logo, title, description, link } = this.props.project;
      return (
         <Link
            className="card"
            to={link ? {pathname : link} : id}
            style={{backgroundColor: color}}
            id={id} key={id}
            target={link ? "_blank" : null}
         >
            <p className={`label ${type}`}>{type}</p>
            <div className="imageWrapper">
               <img className="cardImage" src={logo} />
            </div>
            <div className="textWrapper">
               <h4>{title}</h4>
               <p>{description}</p>
            </div>
         </Link>
      );
   }
}

export default Card;
