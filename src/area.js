import React from 'react'
import PropTypes from 'prop-types'

const Area = ({ name, fill, classes, onClick, dimensions }) => (
  <path data-name={name} className={classes} fill={fill} d={dimensions} onClick={onClick} />
)

Area.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.string.isRequired
}

export default Area
