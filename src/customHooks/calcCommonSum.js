import { useState,useEffect } from 'react'


export function useCalcCommonSum(data) {
  const [commonSum, calcCommonSum] = useState(0);

  useEffect(() => {
    calcCommonSum(() => data.reduce((acc,cur) => acc + cur.sum,0))
  }, [data]);

  return commonSum;
}