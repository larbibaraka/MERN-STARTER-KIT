/*********************************************** 
 * 
 * this is the file that you will need
 * to add your api routes 
 *
*******************************************/
'use strict';
import express from 'express';
const Api = express.Router();

//welcome page
Api.get('/' , (req, res)=>{
  res.json([{
    id : new Date()
  }])
})



export default Api;