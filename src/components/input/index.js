import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './input.css';

class Input extends React.Component {

  onChangeText(id) {
    let value = document.getElementById(id).value;
    switch (id) {
      case 'user-name':
        this.props.setDataUserName(value)
        break;
      case 'pass-word':
        this.props.setDataPassword(value)
        break;
    }
  }

  render() {
    const { type, placeholder, id, classInput } = this.props;

    return (
      <div className="input-wrapper">
        <input
          id={id}
          type={type}
          className={classInput}
          placeholder={placeholder}
          onChange={() => this.onChangeText(id)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  classInput: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => {
  return {
    setDataUserName(value) {
      dispatch({type: 'SET_DATA_USER_NAME', value})
    },
    setDataPassword(value) {
      dispatch({type: 'SET_DATA_PASSWORD', value})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)
