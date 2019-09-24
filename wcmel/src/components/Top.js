import React from 'react'
import '../css/style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './home'


const Topbar = () => {
    return (
        <section class='topbar'>
            <div >
                <Router>
                    <ul>
                        <li>
                            <Link to="/">Home Link</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home} />
                </Router>
            </div>

        </section>
    )
}

export default Topbar;