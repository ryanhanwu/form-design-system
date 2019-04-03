import React from 'react';
import PropTypes from 'prop-types';
import TrashIcon from 'fds-icons/lib/react/TrashIcon';
import ActionButton from '../ActionButton';

const DeleteAction = ({ onClick, ...other }) => (
  <ActionButton
    iconComponent={<TrashIcon size="s" />}
    label="Delete"
    onClick={onClick}
    {...other}
  />
);

DeleteAction.propTypes = {
  /** Click callback for button */
  onClick: PropTypes.func.isRequired,

  /** Disables the button if `true` */
  disabled: PropTypes.bool,
};

export default DeleteAction;
