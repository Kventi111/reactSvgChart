import React, { useState, useEffect } from 'react';
import Sector from './sector';

import { getColorForCategory } from './constants';
import { dynamicCalcChart } from './utils/dynamicChartCalc'

const PieChart = ({ data, width, height, radius, thickness }) => {
  const [proccesedData, setProcessedData] = useState([]);
  const [commonSum, calcCommonSum] = useState(0);

  useEffect(() => {
    setProcessedData(dynamicCalcChart(data));
    calcCommonSum(() => data.reduce((acc,cur) => acc + cur.sum,0))
  }, [data]);

  console.log({ proccesedData });
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
            key={index}
            id={item.id}
            cx={width / 2}
            cy={height / 2}
            radius={radius}
            thickness={thickness}
            fill={getColorForCategory[item.category] || '#d6d6d6'}
            opts={item}
          />
        ))}

        <text text-anchor="middle"  x={width / 2} y={height / 2}>Расходы</text>
        <text text-anchor="middle"  x={width / 2} y={(height / 2) + 20}>{commonSum} Р</text>
    </svg>
  );
};

export default PieChart;
