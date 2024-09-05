import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaHandsClapping} from 'react-icons/fa6'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {IoIosSunny} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({isDarkTheme, toggleTheme}) => (
          <nav className={isDarkTheme ? 'black-theme' : 'light-thee'}>
            <div
              className={isDarkTheme ? 'white-hand-theme' : 'light-hand-theme'}
            >
              <FaHandsClapping />
            </div>
            <div>
              <ul className="ul-items">
                <li className="list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={toggleTheme}>
                {isDarkTheme ? <IoIosSunny /> : <BsFillMoonStarsFill />}
              </button>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
