import React from 'react';
import WelcomeOptions from './WelcomeOptions.js';
import { shallow } from 'enzyme';

const mockFunc = jest.fn();

describe('WelcomeOptions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WelcomeOptions 
                      chooseGamePath={mockFunc}
                      chooseGamePath={mockFunc}
                      />)
});
it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
});
