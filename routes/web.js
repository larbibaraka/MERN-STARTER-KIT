/*********************************************** 
 * 
 * this is the file that you will need
 * to add your public routes 
 *
*******************************************/
'use strict';
import express from 'express';

const Web = express.Router();


Web.get('/', (res, response)=>{
    response.send('barak baraka');
})


export default Web;