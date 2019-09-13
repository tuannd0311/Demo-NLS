import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../navbar';
import Loading from '../loading';
import { getDataCat, getDataDog } from '../../actions';

import '../App.css';
import './home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataCat: {},
    }
  }

  componentDidMount() {
    const { getDataCat, getDataDog } = this.props;
    getDataDog()
    getDataCat()
  }

  renderCat(data) {
    return (
      <div key={data}>
        <img src={data.url} alt="The Cat Image" width="95%" height="300" />
      </div>
    )
  }

  render() {
    const { currentDataCat, currentDataDog, loading } = this.props
    const checkdata =  currentDataCat && currentDataCat.length ? true : false

    return (
      <div className='home-wrapper'>
        <Navbar />
        <div className='home-content'>
          <Loading />
          {!loading ?
            (<div className='content'>
              <div className='show-content'>
                {checkdata ? currentDataCat.map( data => this.renderCat(data) ) : null}
                <h1 className='title'>
                  Choosing a new cat
                </h1>
                <p className='text-cat'>
                  Cats who previously lived with another cat are more likely to get along with other cats than a cat who was an “only child.” Think about the things that the cats already in your home like to do. If they like to play, getting another playful cat is probably a good idea.
                </p>
              </div>
              <div className='show-content'>
                <img src={currentDataDog} alt="The Dog Image" width="95%" height="300" />
                <h1 className='title'>
                  Choosing a new Dog
                </h1>
                <p className='text-cat'>
                It is important to understand that puppies are still developing their communication skills. This means that they don’t understand the rules set in place by adult dogs.
                </p>
              </div>
            </div>)
            : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentDataCat: state.home.dataCat,
    currentDataDog: state.home.dataDog,
    loading: state.home.loading
  }};

const mapDispatchToProps = {
  getDataCat,
  getDataDog,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
