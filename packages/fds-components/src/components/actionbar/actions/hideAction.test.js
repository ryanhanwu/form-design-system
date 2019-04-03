import React from 'react';
import { shallow } from 'enzyme';
import HideAction from './HideAction';

describe('HideAction component', () => {

  it('matches snapshot', () => {
    const component = shallow(<HideAction onClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('fires callback on click', () => {
    // ABTODO
  });

});
