import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

export default class Button extends React.Component {
  render() {
    const { text, handleClick } = this.props;

    return (
      <div className="button-wrapper">
        <button className="button" onClick={handleClick}>
          <span className="text">
            {text}
          </span>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
