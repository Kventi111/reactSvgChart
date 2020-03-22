import { expect } from 'chai';
import FormatNumber from '../../utils/formatNumber';


const case1 = 1000;
const case2 = 10000;
const case3 = 100000;
const case4 = 1000000;
const case5 = 10000000;

const case99 = 25490.23;


describe('фун-я формматирования цифр',() => {
  it("formatNumber() input 1000 expected 1,000",() => {
    console.log(FormatNumber(case1));
    
    expect(FormatNumber(case1)).equal("1,000")
  })
  it("formatNumber() input 10000 expected 10,000",() => {
    console.log(FormatNumber(case2));
    
    expect(FormatNumber(case2)).equal("10,000")
  })
  it("formatNumber() input 25490.23 expected 25,490.23",() => {
    console.log(FormatNumber(case99));
    
    expect(FormatNumber(case99)).equal("25,490.23")
  })
})