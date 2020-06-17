import { React } from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Index} from './index.js'

Enzyme.configure({adapter: new Adapter});

describe('Index Componennt', () => {

  it('it should fill the value ', () => {
    const wrapper=shallow(<Index/>)
    const button=wrapper.find('#7')
    button.simulate('click')
    const text=wrapper.find('input')
    expect (text.length).toBe(0)
    
  })
  
  
})
