import React from 'react';
import PropTypes from 'prop-types';
import HideIcon from 'fds-icons/lib/react/HideIcon';
import ActionButton from '../ActionButton';

const HideAction = ({ onClick }) => (
  <ActionButton iconComponent={<HideIcon size="m" />} label="Hide" onClick={onClick} />
);

HideAction.propTypes = {
  /** Click callback for button */
  onClick: PropTypes.func.isRequired,
};

export default HideAction;
