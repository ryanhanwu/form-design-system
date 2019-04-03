import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuButton from '../interactive/MenuButton';

const ActionButton = ({ className, ...other }) => (
  <MenuButton className={cx('actionButton', className)} {...other} />
);

ActionButton.propTypes = {
  /** Icon component to render */
  iconComponent: PropTypes.element.isRequired,

  /** Button label */
  label: PropTypes.string,

  /** Click handler for button */
  onClick: PropTypes.func,

  /** adds custom className */
  className: PropTypes.string,
};

export default ActionButton;
