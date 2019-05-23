import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';






const User = {
    name: "Christofer",
    challenges: [{
        id: 1,
        UserThrows: 7,
        OppThrows: 12,
        Goal: 24,
        TotalUserThrows: 7,
        TotalOppThrows: 12,
    }]
}



ReactDOM.render(<App {...User}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
