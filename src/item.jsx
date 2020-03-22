import React from 'react';

import { getColorForCategory } from './constants'
import formatNumbe from './utils/formatNumber'

const Item = ({
  id,
  category,
  sum,
  onClick
}) => {
  return ( 
    <span onMouseEnter={() => onClick({id,category})} onMouseLeave={() => onClick({id : '',category: ''})} className="item" style={{ backgroundColor:  getColorForCategory[category] || '#d6d6d6'}}>
      <span className="label">{category || "Прочее"}</span>
      <span className="sum">{formatNumbe(sum)}</span>
    </span>
   );
}
 
export default Item;