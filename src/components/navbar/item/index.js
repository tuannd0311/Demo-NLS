import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item.css'

export default class Item extends Component {

  render() {
    return (
      <div className='top-menu-item'>
        <span className='top-menu-text'>
          {this.props.text}
        </span>
      </div>
    )
  }
}

Item.propTypes = {
  text: PropTypes.string,
};
