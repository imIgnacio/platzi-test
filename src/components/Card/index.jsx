import React from 'react';
import './styles.scss';

function Card({ image, title, price }) {
  return (
    <div id='card'>
      <img
        src={image}
        alt='Product Image'
        loading='lazy'
        width={128}
        height={128}
      />
      <h4 id='cardTitle'>{title}</h4>
      <p id='cardPrice'>${price}</p>
    </div>
  );
}

export default Card;
