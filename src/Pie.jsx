import React from 'react';


const Pie = ({
  id,
  cx,
  cy,
  value,
  radius,
  startPosition,
  className,
  thickness,
  color,
  mask,
  isActive
}) => {
  const rotate = `rotate(-90 ${cx} ${cy})`;
  const maxStrokeLength = 2 * 3.14 * radius;
  const startStrokeArray = `${value} ${maxStrokeLength}`;

  
  return ( 
    <circle 
      className={isActive ? className + ' pie__scale': className}
      r={radius}
      cx={cx}
      cy={cy}
      fill={'none'}
      transform={rotate}
      stroke={color}
      strokeWidth={thickness}
      strokeDasharray={startStrokeArray}
      strokeDashoffset={startPosition}
      mask={mask}
    />
   );
}
 
export default Pie;