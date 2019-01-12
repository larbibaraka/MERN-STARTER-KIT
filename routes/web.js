/*********************************************** 
 * 
 * this is the file that you will need
 * to add your public routes 
 *
*******************************************/

import express from 'express';

const Route = express.Router();


Route.get('/' , (req , res)=>{
    res.render('welcome')
})


export default Route;