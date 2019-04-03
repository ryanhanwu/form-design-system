import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

const ActionBar = ({
  selectedCount,
  actionHide,
  actionDelete,
  actionCollections,
  actionStories,
  actionTag,
  actionDownload,
  actionSalesforce,
}) => {
  const hasModifyActions = actionHide || actionDelete;
  const hasAllocationActions = actionCollections || actionStories || actionTag;
  const hasExternalActions = actionDownload || actionSalesforce;

  return (
    <div className="actionBar">
      <Flex align="center" justify="spaceBetween">
        <FlexItem>
          {hasModifyActions && (
            <div className="actionBar-actions actionBar-actions--modify" noGutters>
              {actionHide && actionHide}
              {actionDelete && actionDelete}
            </div>
          )}

          {hasAllocationActions && (
            <div className="actionBar-actions actionBar-actions--allocate" noGutters>
              {actionCollections && actionCollections}
              {actionStories && actionStories}
              {actionTag && actionTag}
            </div>
          )}

          {hasExternalActions && (
            <div className="actionBar-actions actionBar-actions--external" noGutters>
              {actionDownload && actionDownload}
              {actionSalesforce && actionSalesforce}
            </div>
          )}
        </FlexItem>

        <FlexItem shrink>
          <p>{selectedCount} Items Selected</p>
        </FlexItem>

        <FlexItem shrink>
          {/* ABTODO - handle dismiss */}
          <IconButton className="countdownButton-button">
            <DenyIcon size="s" />
          </IconButton>
        </FlexItem>
      </Flex>
    </div>
  );
};

ActionBar.propTypes = {
  /** Number of items user has selected */
  selectedCount: PropTypes.number.isRequired,

  /** Delete action component */
  actionDelete: PropTypes.element,

  /** Hide action component */
  actionHide: PropTypes.element,

  /** Collections action component */
  actionCollections: PropTypes.element,

  /** Stories action component */
  actionStories: PropTypes.element,

  /** Tag action component */
  actionTag: PropTypes.element,

  /** Download action component */
  actionDownload: PropTypes.element,

  /** Salesforce action component */
  actionSalesforce: PropTypes.element,
};

export default ActionBar;
