export function dynamicCalcPieChart(data,radius,maxSum) {
  let circumFerence = 2 * 3.14 * radius; // Длина окружности
  let circumFerenceCount = 0;

  if (maxSum === 0) return; // первый холостой рендер (инициализация)
  if (data.length === 1) {
    return [
      {
        ...data[0],
        startPosition: 0,
        value: circumFerence,
      },
    ];
  }


  return data.map((item, index) => {
    let percent = (item.sum * 100) / maxSum;
    let angle = (360 * percent) / 100;

    let startPosition = index === 0 ? 0 : -circumFerenceCount;
    let value = 2 * 3.14 * radius * angle / 360;
    circumFerenceCount += value;

    // console.log(index)
    // console.log({ percent });
    // console.log({ angleStep });
    // console.log({ value });
    console.log({ circumFerenceCount });
    // console.log({ lastAngleStep })
    // console.log(circumFerence - lastAngleStep)

    // console.log(item.sum);
    // console.log({ percent });

    return {
      ...item,
      startPosition,
      value,
    };
  });
}
