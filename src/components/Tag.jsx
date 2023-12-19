import React from 'react';
import PropTypes from 'prop-types';

function Tag({ label }) {
  return (
    <div className="tag">
      <span>{label}</span>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
