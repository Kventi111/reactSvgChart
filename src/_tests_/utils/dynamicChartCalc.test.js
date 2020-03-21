import { expect } from 'chai'
import { dynamicCalcChart } from '../../utils/dynamicChartCalc'

const expenses = [
  {
    id: 1,
    category: 'АЭС',
    sum: 1,
  },
  {
    id: 2,
    category: 'Коммунальные платежи',
    sum: 2,
  },
];

const expenses1 = [
  {
    id: 1,
    category: 'АЭС',
    sum: 1,
  }
];

describe('функция динамического расчета диаграммы',() => {
  it('dynamicCalcChart() должнем вернуть 2',() => {
    expect(dynamicCalcChart(expenses)).deep.equal([
      {
        id: 1,
        category: 'АЭС',
        sum: 1,
        startAngle: 0,
        endAngle: 120
      },
      {
        id: 2,
        category: 'Коммунальные платежи',
        sum: 2,
        startAngle: 120,
        endAngle: 360
      },
    ])
  })
  it('dynamicCalcChart() должнем вернуть 22',() => {
    expect(dynamicCalcChart(expenses1)).deep.equal([
      {
        id: 1,
        category: 'АЭС',
        sum: 1,
        startAngle: 0,
        endAngle: 359.99
      }
    ])
  })
})