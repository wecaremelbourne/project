import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/Top'
import Middlebar from './components/middle';
import Bottombar from './components/bottom';


const App = () => {
    return (
        <div>
            <Topbar/>
        </div>
    ) 
}
ReactDOM.render(<App />, document.getElementById('root'));
