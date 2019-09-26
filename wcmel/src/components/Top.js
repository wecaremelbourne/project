import React from 'react'
import '../css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home'
import Matter1 from './/Matter1'
import Matter2 from './Matter2'



const MainApp = () => {
    return (
        <section class='topbar'>
            <div >
                <Router>
                    <ul>
                        <li>  <Link to="/">Home</Link>  </li>
                        <li>  <Link to="/matter1">matter1</Link>  </li>
                        <li>  <Link to="/matter2">matter2</Link>  </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdownbtn">Hover Menu</button>
                                <div class="dropdownbtncontent">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* <div class="dropdown">
                        <button class="dropdownbtn">Hover Menu</button>
                        <div class="dropdownbtncontent">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </div>
                    </div> */}

                    <Route exact path="/" component={Home} />
                    <Route exact path="/matter1" component={Matter1} />
                    <Route exact path="/matter2" component={Matter2} />
                </Router>
            </div>

        </section >
    )
}

export default MainApp;