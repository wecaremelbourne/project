import React, { useState } from 'react'
import '../css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home'
import Matter1 from './/Matter1'
import Matter2 from './Matter2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const MainApp = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <section className="topbar">
            <div className='badge'
                onClick={
                    () => {
                        console.log("menu is visible ?" + menuVisible)
                        setMenuVisible(!menuVisible)
                    }
                }>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="ulsection">
                <Router>
                    <ul className={menuVisible === false ? "inactive" : "active"}>
                        <li>  <Link to="/">Home</Link>  </li>
                        <li>  <Link to="/matter1">matter1</Link>  </li>
                        <li>  <Link to="/matter2">matter2</Link>  </li>
                        <li>matter3
                            <div className="dropdown-content">
                                <Link to="/matter1">sublink1</Link>
                                <Link to="/matter2">sublink2</Link>
                            </div>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/matter1" component={Matter1} />
                    <Route exact path="/matter2" component={Matter2} />
                </Router>
            </div>
        </section >
    )
}

export default MainApp;