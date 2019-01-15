import { combineReducers } from 'redux';
import sayHelloReducer from './sayHello';  
export default combineReducers ({ 
    sayHello : sayHelloReducer
});