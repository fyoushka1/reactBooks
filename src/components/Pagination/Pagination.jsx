import React from 'react';
import arrow from '../../assets/img/right-arrow.png'

import './pagination.scss'
const Pagination = ({onPagination,page}) => {
  const pageN = [1,2]
  return (
      <div className='pagination'>
        {
          pageN.map((pageNumber, index) => (
              <button
                  className={pageNumber === page ? 'pagination__btn active' : 'pagination__btn'}
                  onClick={() => onPagination(pageNumber)}
                  key={pageNumber}>{pageNumber}
              </button>
          ))
        }
      </div>
  );
};

export default Pagination;