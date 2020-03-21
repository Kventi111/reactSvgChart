import React from 'react';

import { getColorForCategory } from './constants'

const Item = ({
  category,
  sum
}) => {
  return ( 
    <span className="item" style={{ backgroundColor:  getColorForCategory[category] || '#d6d6d6'}}>
      <span className="label">{category || "Прочее"}</span>
      <span className="sum">{sum}</span>
    </span>
   );
}
 
export default Item;