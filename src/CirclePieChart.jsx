import React, { useState, useEffect } from 'react';

import Pie from './Pie';


import { useCalcCommonSum } from './customHooks/calcCommonSum';
import { dynamicCalcPieChart } from './utils/dynamicCalcPieChart';
import { getColorForCategory } from './constants';
import formatNumber from './utils/formatNumber';

const CirclePieChart = ({
  data,
  width,
  height,
  radius,
  thickness,
  text,
  activeCategory
}) => {
  const commonSum = useCalcCommonSum(data);
  const [proccesedData, setProcessedData] = useState([]);

  useEffect(() => {
    setProcessedData(dynamicCalcPieChart(data, radius, commonSum));
  }, [commonSum, data, radius]);

  let delay = 0;
  return (
    <svg
      width={width}
      height={height}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      <mask id='myMask'>
        <rect x='0' y='0' width={width} height={height} fill='white' />
        <circle cx={width / 2} cy={height / 2} r={radius} fill='while' />
      </mask>

      {!proccesedData && (
        <text x={width / 2} y={height / 2} fill='red'>
          I love SVG!
        </text>
      )}
      {proccesedData &&
        proccesedData.map(i => {
          delay += 300;

          return (
            <Pie
              d={delay}
              id={i.id}
              key={i.id}
              isActive={activeCategory === i.category}
              cx={width / 2}
              cy={height / 2}
              className={`pie-${i.id}`}
              color={getColorForCategory[i.category] || '#d6d6d6'}
              radius={radius}
              thickness={thickness}
              startPosition={i.startPosition}
              value={i.value}
              mask='url(#myMask)'
            />
          );
        })}

      <use xlinkHref='#myMask' />
      <text textAnchor='middle' x={width / 2} y={height / 2}>
        {text}
      </text>
      <text textAnchor='middle' x={width / 2} y={height / 2 + 20}>
        {formatNumber(commonSum)} ₽
      </text>
    </svg>
  );
};

export default CirclePieChart;
