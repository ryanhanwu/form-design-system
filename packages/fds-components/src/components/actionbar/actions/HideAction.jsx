import React from 'react';
import PropTypes from 'prop-types';
import HideIcon from 'fds-icons/lib/react/HideIcon';
import ActionButton from '../ActionButton';

const HideAction = ({ onClick, ...other }) => (
  <ActionButton
    iconComponent={<HideIcon size="s" />}
    label="Hide"
    onClick={onClick}
    {...other}
  />
);

HideAction.propTypes = {
  /** Click callback for button */
  onClick: PropTypes.func.isRequired,

  /** Disables the button if `true` */
  disabled: PropTypes.bool,
};

export default HideAction;
