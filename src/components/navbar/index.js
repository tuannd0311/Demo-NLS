import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/fontawesome-free-solid/faBars'

import Item from '././item'
import Lead from '././lead'

import './navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClass: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menuClass: 'toggled',
      })
    } else {
      this.setState({
        menuClass: '',
      })
    }
  }

  render = () => {
    let topMenuClass = `top-menu ${this.state.menuClass}`
    return (
      <div className={topMenuClass} >
        <Lead text="DEMO" />
        <div className='left'>
          <Item text='Anime'/>
          <Item text='Game'/>
        </div>
        <div className='right'>
          <Item text='About' />
          <Item text='Login' />
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className='top-menu-icon'
          onClick={this.setToggleTopMenuClass}
        />
        <div className='clear-fix' />
      </div>
    )
  }
}
