import React from 'react';
import PropTypes from 'prop-types';

const directionHelper = (column, reverse) => {
  const cond = [];
  if (column) {
    cond.push('column');
  }
  if (reverse) {
    cond.push('reverse');
  }
  return cond.join('-');
};

const FlexContainer = (props) => {
  const { children, jc, ai, fd, wrap, column, reverse } = props;

  const inlineStyles = {
    display: 'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: directionHelper(column, reverse),
    flexWrap: wrap,
  };
  return <div style={inlineStyles}>{children}</div>;
};
FlexContainer.defaultProps = {
  jc: 'flex-start',
  ai: 'stretch',
  fd: 'row',
  wrap: 'no-wrap',
};
FlexContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  jc: PropTypes.string,
  ai: PropTypes.string,
  fd: PropTypes.string,
  wrap: PropTypes.string,
};

export default FlexContainer;
