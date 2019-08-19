import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Tabs from './Tabs';

storiesOf('Interactive/Tabs', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => <Tabs />);
