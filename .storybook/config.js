import { configure, addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { jsxDecorator } from 'storybook-addon-jsx';
import { create } from '@storybook/theming';

import '../src/components/style/index.css';

const theme = create({
  brandTitle: 'fds-components',
  brandUrl: 'cbinsights.github.io/form-design-system',
  brandImage: '', // We can add an actual logo later,
});

addParameters({
  options: {
    theme,
  },
});

addDecorator(centered);
addDecorator(withPropsTable);
addDecorator(jsxDecorator);

configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module);
