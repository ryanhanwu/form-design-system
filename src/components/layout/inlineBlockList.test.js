import React from 'react';
import { shallow } from 'enzyme';

import InlineBlockList from './InlineBlockList';

describe('Section component', () => {

  it('matches snapshot for string items', () => {
    const component = shallow(
      <InlineBlockList
        separator="🐍"
        items={['why', 'did', 'it', 'have', 'to', 'be', 'snakes?']}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot for mixed strings and components', () => {
    const component = shallow(
      <InlineBlockList
        separator="🎃"
        items={[
          <a key="👻" href="#">Spooky</a>,
          'snapshot',
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('all list items include the correct data-separator attribute', () => {
    const TEST_SEPARATOR = "・"
    const component = shallow(
      <InlineBlockList
        separator={TEST_SEPARATOR}
        items={[ 'one', 'two', 'three', ]}
      />
    );
    component.find('li').forEach((item) => {
      expect(item.prop('data-separator')).toBe(TEST_SEPARATOR);
    });
  });

});
