import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

export const ImageWrapper = (props) => {
  const { children, width, height, style, ...restProps } = props;

  const inlineStyles = {
    height,
    width,
    ...style,
  };
  return (
    <div style={inlineStyles} {...restProps}>
      {children}
    </div>
  );
};

ImageWrapper.defaultProps = {
  className: styles.wrapper,
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
