import React from "react";
import {shallow} from'enzyme';
import ExpenseForm from'../../components/ExpenseForm';
import expenses from "../fixtures/expenses";
test('should render the expense form',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render the expense  with passed data',()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})