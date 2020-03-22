import React from 'react';
// import PieChart from './PieChart';
import CirclePieChart from './CirclePieChart';
// import Item from './item';

function App() {
  const expenses = [
    {
      id: 1,
      category: 'АЭС',
      sum: 5,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 5,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 5,
    },
    // {
    //   id: 4,
    //   category: 'Мобильная связь',
    //   sum: 5,
    // }
  ];

  // const currencyExpenses = [
  //   {
  //     id: 1,
  //     category: 'Валютные ультра пер..',
  //     sum: 3125490.23,
  //   },
  // ];

  return (
    <div className='App'>
      {/* <div className="rubExpenses">
        <PieChart
          data={expenses}
          radius={80}
          thickness={12}
          width={200}
          height={200}
          text={'Расходы'}
        />
        <div className='list'>
        {expenses.map(i => <Item key={i.id} category={i.category} sum={i.sum} />)}
        </div>
      </div>
      <div className="currencyExpenses">
        <PieChart
          data={currencyExpenses}
          radius={80}
          thickness={12}
          width={200}
          height={200}
          text={'Поступления'}
        />
        <div className='list'>
        {currencyExpenses.map(i => <Item key={i.id} category={i.category} sum={i.sum} />)}
        </div>
      </div> */}

      <CirclePieChart
        text={'Расходы'}
        radius={100}
        thickness={25}
        data={expenses}
        width={400}
        height={400}
      />
    </div>
  );
}

export default App;
