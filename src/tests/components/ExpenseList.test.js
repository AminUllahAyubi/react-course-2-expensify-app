import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList } from '../../components/expenseList';
import expenses from '../fixtures/expenses';
import ExpenseListItems from '../../components/ExpenseListItems';
test('should test the expense list component with expenses list data',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})
test('should test the expense list component without expenses list data',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})
