import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import Footer from './Footer';
import App from './App';


test('Should display the Footer text',()=>{
  const wrapper=shallow(<Footer/>);
  const footer=wrapper.find('h3');
  const result=footer.text();
  expect(result).toBe('Footer Window')
})
test('Should Equal to Zero ', () => {
  const wrapper=shallow(<App/>)
  const app=wrapper.find('h1');
  expect(app.text()).toBe("0")
})
test('should increase the value', () => {
  const wrapper=shallow(<App/>)
  const button=wrapper.find('button.inc')
  button.simulate('click')
  const total=wrapper.find('h1').text();
  expect(total).toBe('1')
  button.simulate('click')
  const total2=wrapper.find('h1').text();
  expect(total2).toBe('2')

})
test('should Decrease the value', () => {
  const wrapper=shallow(<App/>)
  const button=wrapper.find('button.dec')
  button.simulate('click')
  const total=wrapper.find('h1').text();
  expect(total).toBe('-1')
})

test('should Set the value to zero', () => {
  const wrapper=shallow(<App/>)
  const button=wrapper.find('button.reset')
  button.simulate('click')
  const total=wrapper.find('h1').text();
  expect(total).toBe('0')
})


 
