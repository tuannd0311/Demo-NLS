import React from 'react';
import { connect } from 'react-redux'

import img from '../../assets/images/loading.gif'
import './loading.css'

let Loading = ({ loading }) => (
loading ?
<div className='loading'>
  <img src={img} alt='loading' />
</div> :
null
);

const mapStateToProps = (state) => ({
  loading: state.home.loading
})
Loading = connect(mapStateToProps,null)(Loading)

export default Loading;