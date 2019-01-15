/***************************************
 * *********************
 * created by laridev 
 * Baraka Larbi 
 * github  :  https://github.com/larbibaraka
 * linkedin : https://www.linkedin.com/in/larbi-baraka-b36651a7/
 * email : laridev@gmail.com
 * *********************
 ******************************************/

 //import react && it's stuff
import React from 'react';
import ReactDOM  from 'react-dom';

/** redux part */
import {Provider} from 'react-redux';
import { createStore , applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

/** reducer*/
import rootReducer from './reducers';

import App from './components/App';


const middlaware = [thunk , createLogger(rootReducer)];

const store = createStore(rootReducer , {} , applyMiddleware(...middlaware) )

ReactDOM.render(
              <Provider store = {store}>
                <App />
              </Provider> , 
              document.getElementById('root'));