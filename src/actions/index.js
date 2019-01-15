import { SAY_HELLO } from '../constants/index';


export  function say_hello (value){ 
  return ({
    type : SAY_HELLO,
    payload : value
  })
} 