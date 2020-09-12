import React from 'react';

const Filter = ({ count, size, sort, sortHandler, sizeHandler }) => {
  return (
    <div className="filter">
      <div className="filter__result"> {count} products </div>
      <div className="filter__sort">
        Order
         <select value={sort} onChange={sortHandler} >
          <option value="lastest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter__size">
        Filter
         <select value={size} onChange={sizeHandler}>
          <option value="ALL">All</option>
          <option value="XX">XX</option>
          <option value="X">X</option>
          <option value="M">M</option>
          <option value="MX">MX</option>
          <option value="XL">XL</option>
          <option value="XLL">XLL</option>
        </select>
      </div>
    </div>
  )
}

export default Filter;
