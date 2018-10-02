import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Welcome} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Welcome name='Connor' color='blue' hobby ='playing video games'/>, document.getElementById('root'));
registerServiceWorker();
