import React from "react";
import {shallow} from 'enzyme';
import Header from "../../components/Header";
test('should render the header',()=>{
    const wrapper=shallow(<Header/>);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    // const renderer=new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput())
});