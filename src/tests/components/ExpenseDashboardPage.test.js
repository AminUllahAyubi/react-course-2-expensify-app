import React from "react";
import { shallow } from "enzyme";
import ExpeneseDashboard from'../../components/ExpenseDashboardPage';
test('should render the ExpenseDashboardPage',()=>{
    const wrapper=shallow(<ExpeneseDashboard/>);
    expect(wrapper).toMatchSnapshot();
});