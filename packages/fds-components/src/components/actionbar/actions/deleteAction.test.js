import React from 'react';
import { shallow } from 'enzyme';
import DeleteAction from './DeleteAction';

describe('DeleteAction component', () => {

  it('matches snapshot', () => {
    const component = shallow(<DeleteAction onClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('fires callback on click', () => {
    // ABTODO
  });

});
