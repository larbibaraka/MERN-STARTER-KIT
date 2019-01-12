'use strict';

import express from "express";
//app middleware
import AppMiddleware from '../middleware/appMiddleware';
import Web from '../routes/web';
import Api from '../routes/api';

let app = new express();
app.use(AppMiddleware);
//defining the web route
app.use(Web);
//defining the api route
app.use('/api' , Api);
//app.use('/api' , api)

app.get('/users' , (req , res)=>{
  res.send('hello');
})

export const start = () =>{
  app.listen(3000, ()=>{
    console.log('server is running on port 3000')
  })
}


