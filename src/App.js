import React from 'react';
import PieChart from './PieChart';
import Item from './item';

function App() {
  // const expenses = [
  //   {
  //     id: 1,
  //     category: 'АЭС',
  //     sum: 14696,
  //     start_angle: 0,
  //     end_angle: 223,
  //   },
  //   {
  //     id: 2,
  //     category: 'Коммунальные платежи',
  //     sum: 7760.23,
  //     start_angle: 223,
  //     end_angle: 296,
  //   },
  //   {
  //     id: 3,
  //     category: 'Налоги',
  //     sum: 2534,
  //     start_angle: 296,
  //     end_angle: 311,
  //   },
  //   {
  //     id: 4,
  //     category: 'Мобильная связь',
  //     sum: 500,
  //     start_angle: 311,
  //     end_angle: 313.7,
  //   },
  //   {
  //     id: 5,
  //     category: 'Кофе и рестораны',
  //     sum: 200,
  //     start_angle: 313.7,
  //     end_angle: 360,
  //   },
  // ];
  const expenses = [
    {
      id: 1,
      category: 'АЭС',
      sum: 200,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 5000,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 2534,
    },
    {
      id: 4,
      category: 'Мобильная связь',
      sum: 200,
    },
    {
      id: 5,
      category: 'Кофе и рестораны',
      sum: 200,
    },
    {
      id: 6,
      category: 'Кофе и рестораны',
      sum: 666,
    },
    {
      id: 7,
      sum: 2020,
    },
    {
      id: 1,
      category: 'АЭС',
      sum: 200,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 5000,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 2534,
    },
    {
      id: 4,
      category: 'Мобильная связь',
      sum: 200,
    },
    {
      id: 5,
      category: 'Кофе и рестораны',
      sum: 200,
    },
    {
      id: 6,
      category: 'Кофе и рестораны',
      sum: 666,
    },
    {
      id: 7,
      sum: 2020,
    },
    {
      id: 1,
      category: 'АЭС',
      sum: 200,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 5000,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 2534,
    },
    {
      id: 4,
      category: 'Мобильная связь',
      sum: 200,
    },
    {
      id: 5,
      category: 'Кофе и рестораны',
      sum: 200,
    },
    {
      id: 6,
      category: 'Кофе и рестораны',
      sum: 666,
    },
    {
      id: 7,
      sum: 2020,
    },
    {
      id: 1,
      category: 'АЭС',
      sum: 200,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 5000,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 2534,
    },
    {
      id: 4,
      category: 'Мобильная связь',
      sum: 200,
    },
    {
      id: 5,
      category: 'Кофе и рестораны',
      sum: 200,
    },
    {
      id: 6,
      category: 'Кофе и рестораны',
      sum: 666,
    },
    {
      id: 7,
      sum: 2020,
    },
  ];
  return (
    <div className='App'>
      <PieChart
        data={expenses}
        radius={80}
        thickness={12}
        width={200}
        height={200}
      />
      <div className='list'>
       {expenses.map(i => <Item category={i.category} sum={i.sum} />)}
      </div>
    </div>
  );
}

export default App;
