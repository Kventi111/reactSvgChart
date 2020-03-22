import React,{useState} from 'react';
import CirclePieChart from './CirclePieChart';
import Item from './item';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const expenses = [
    {
      id: 1,
      category: 'АЭС',
      sum: 14696,
    },
    {
      id: 2,
      category: 'Коммунальные платежи',
      sum: 7760.23,
    },
    {
      id: 3,
      category: 'Налоги',
      sum: 2534,
    },
    {
      id: 4,
      category: 'Мобильная связь',
      sum: 500,
    },
    {
      id: 5,
      category: 'Кафе и рестораны',
      sum: 200.26,
    }
  ];

  const currencyExpenses = [
    {
      id: 1,
      category: 'Валютные ультра пер..',
      sum: 3125490.23,
    },
  ];  

  function test({ id,category }) {
    setActiveCategory(category)
  }

  return (
    <div className='App'>
      <div className='rubExpenses'>
        <CirclePieChart
          text={'Расходы'}
          radius={80}
          thickness={20}
          data={expenses}
          width={200}
          height={200}
          activeCategory={activeCategory}
        />
        <div className='list'>
          {expenses.map(i => (
            <Item onClick={test} id={i.id}  key={i.id} category={i.category} sum={i.sum} />
          ))}
        </div>
      </div>
      <div className='currencyExpenses'>
        <CirclePieChart
          text={'Расходы'}
          radius={80}
          thickness={20}
          data={currencyExpenses}
          width={200}
          height={200}
          activeCategory={activeCategory}
        />
        <div className='list'>
          {currencyExpenses.map(i => (
            <Item onClick={test} id={i.id} key={i.id} category={i.category} sum={i.sum} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
