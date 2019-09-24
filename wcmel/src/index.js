import React from 'react';
import ReactDOM from 'react-dom';
import Topbar from './components/header'


const App = () => {
    return (
        <div>
            <Topbar/>            
        </div>
    ) 
}
ReactDOM.render(<App />, document.getElementById('root'));
