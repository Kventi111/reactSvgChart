import React, { useState, useEffect } from 'react';
import Sector from './sector';

import { getColorForCategory } from './constants';
import { dynamicCalcChart } from './utils/dynamicChartCalc'
import { useCalcCommonSum } from './customHooks/calcCommonSum'

const PieChart = ({ data, width, height, radius, thickness,text }) => {
  const [proccesedData, setProcessedData] = useState([]);
  const commonSum = useCalcCommonSum(data)

  useEffect(() => {
    setProcessedData(dynamicCalcChart(data));
  }, [data]);

  return (
    <svg width={width} height={height} version='1.1'>
      {!proccesedData && (
        <text x={width / 2} y={height / 2} fill='red'>
          I love SVG!
        </text>
      )}

      {proccesedData &&
        proccesedData.map((item, index) => (
          <Sector
            id={item.id}
            key={index}
            cx={width / 2}
            cy={height / 2}
            radius={radius}
            thickness={thickness}
            fill={getColorForCategory[item.category] || '#d6d6d6'}
            opts={item}
          />
        ))}

        <text textAnchor="middle"  x={width / 2} y={height / 2}>{text}</text>
        <text textAnchor="middle"  x={width / 2} y={(height / 2) + 20}>{commonSum} ₽</text>
    </svg>
  );
};

export default PieChart;
