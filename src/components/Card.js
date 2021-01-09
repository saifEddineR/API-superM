import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
const Card = ({ name, img }) => {
  const [heart, setHeart] = useState(false);
  // if (name === 'Lucas Wong') {
  //   setHeart(true);
  // }
  return (
    <div className='card'>
      <span className='title'>
        <p>{name} </p>
      </span>
      {heart ? (
        <span
          style={{ color: 'red' }}
          className='heart-icon'
          onClick={() => setHeart(!heart)}
        >
          <AiFillHeart />
        </span>
      ) : (
        <span className='heart-icon' onClick={() => setHeart(!heart)}>
          <AiFillHeart />
        </span>
      )}
      {heart ? (
        <img
          src={img}
          style={{ boxShadow: '0px 0px 20px red' }}
          alt=''
          width='200px'
        />
      ) : (
        <img src={img} alt='' width='200px' />
      )}
    </div>
  );
};

export default Card;
