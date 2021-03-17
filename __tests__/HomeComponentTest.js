import React from 'react';
import HomeComponent from '../src/components/HomeComponent';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders correctly', () => {
  const wrapper = shallow(<HomeComponent />)
  expect(toJson(wrapper)).toMatchSnapshot();
});

describe('HomeComponent', () => {
  describe('Rendering', () => {
      it('should match to snapshot', () => {
          const component = shallow(<HomeComponent />)
          expect(component).toMatchSnapshot()
      });
  });
});