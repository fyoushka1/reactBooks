import React from 'react';
import empty from '../../assets/img/box.png'

const EmptyBooksList = () => {
  return (
      <div className="empty__listBooks">
        <h1>Товары <span>отсутствуют</span></h1>
        <img src={empty} alt=""/>
      </div>
  );
};

export default EmptyBooksList;