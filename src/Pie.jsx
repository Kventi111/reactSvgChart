import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

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
  isActive = false,
  d
}) => {
  const [animateActive, setAnimateState] = useState(false);
  const [offAnimate,setOffAnimate] = useState(true);

  const rotate = `rotate(-90 ${cx} ${cy})`;
  const maxStrokeLength = 2 * 3.14 * radius;
  const startStrokeArray = `${value} ${maxStrokeLength}`;
  const resetStyles = {}

  const transitionStyles = {
    entering: {
      strokeDasharray: startStrokeArray,
      strokeDashoffset: startPosition,
    },
    entered: {
      strokeDasharray: startStrokeArray,
      strokeDashoffset: startPosition,
    },
    exiting: {
      strokeDasharray: `0 ${maxStrokeLength}`,
      strokeDashoffset: startPosition,
    },
    exited: {
      strokeDasharray: `0 ${maxStrokeLength}`,
      strokeDashoffset: startPosition,
    },
  };

  useEffect(() => {
    setTimeout(() => setAnimateState(true), 100);
    setTimeout(() => setOffAnimate(false), 200);
  }, [setAnimateState,setOffAnimate]);

  console.log({ isActive });
  
  return (
    <Transition in={animateActive}>
      {state => {
        return (
          <circle
            className={isActive ? className + ' pie__scale': className}
            style={{
              transition: `all ease 450ms ${offAnimate ? d : 0}ms`,
              ...transitionStyles[state]
            }}
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
      }}
    </Transition>
  );
};

export default Pie;