export function dynamicCalcChart(data) {
  if (data.length === 1) {
    return [
      {
        ...data[0],
        startAngle: 0,
        endAngle: 359.99,
      },
    ];
  }

  let maxAngle = 360;
  const maxSum = data.reduce((acc, cur) => acc + cur.sum, 0);

  return data.map((item, index) => {
    let percent = (item.sum * 100) / maxSum;
    let angleStep = (360 * percent) / 100;

    let startAngle = index === 0 ? 0 : 360 - maxAngle;
    let endAngle = index === 0 ? angleStep : startAngle + angleStep;
    maxAngle -= angleStep;

    // console.log(item.sum);
    // console.log({ percent });
    // console.log({ maxAngle });
    // console.log({ angleStep });

    // console.log(startAngle, endAngle);

    return {
      ...item,
      startAngle,
      endAngle,
    };
  });
}
