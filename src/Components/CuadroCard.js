import React from 'react';

const CuadroCard = ({ id, imageUrl, miniDesc, name }) => {
  return (
    <article className='single-cuadro'>
      <div className='cuadro-img-overlay'></div>
      <img src={imageUrl} alt={name} className='cuadro-img' />
      <div className='cuadro-info'>
        <h3 className='cuadro-name'>{name}</h3>
        <p className='cuadro-desc'>{miniDesc}</p>
      </div>
    </article>
  );
};

export default CuadroCard;
