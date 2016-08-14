import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.currentPage = ''
  }

  renderNavItems() {
    const currentPage = this.props.location.pathname
    const pageCheck = (page) => page === currentPage ? 'nav-link-current' : 'nav-link'
    return (
      <nav>
        <ul>
          <li className={pageCheck('/')}><IndexLink to="/">Home</IndexLink></li>
          <li className={pageCheck('/about')}><Link to="/about">About</Link></li>
          <li className={pageCheck('/work')}><Link to="/work">Work</Link></li>
          <li className={pageCheck('/contact')}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
  render() {
    return (
      <div>
        {this.renderNavItems()}
        {this.props.children}
      </div>

    )
  }

}
