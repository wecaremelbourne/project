import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/Top'


const App = () => {
    return (
        <div>
            <MainApp/>
        </div>
    ) 
}
ReactDOM.render(<App />, document.getElementById('root'));
