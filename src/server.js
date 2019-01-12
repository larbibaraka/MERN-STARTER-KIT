'use strict';
import express from "express";
//app middleware
import AppMiddleware from '../middleware/appMiddleware';
import Web from '../routes/web';
import Api from '../routes/api';

let app = new express();
//using ejs as a template engine
app.set('view engine' , 'ejs');
//app middleware 
app.use(AppMiddleware);
//defining the web route
app.use(Web);
//defining the api route
app.use('/api' , Api);
//serving the static files like css , images ...etc
app.use(express.static('public'));

app.get('/users' , (req , res)=>{

  res.render('index');

})

export const start = () =>{
  app.listen(3000, ()=>{
    console.log('server is running on port 3000')
  })
}


