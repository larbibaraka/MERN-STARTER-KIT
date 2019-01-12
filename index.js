import express from "express";
import dotenv from 'dotenv';
//app middleware
import AppMiddleware from './middleware/appMiddleware';

import Route from './routes/web';
import Api from './routes/api';
//As early as possible in your application, require and configure dotenv.
dotenv.config();
//env variables 
const PORT = process.env.APP_PORT || 3000;
//init express
let app = new express();
//using ejs as a template engine
app.set('view engine' , 'ejs');
//app middleware 
app.use(AppMiddleware);

//defining the web route
app.use(Route);
//defining the api route
app.use('/api' , Api);



app.all('*' , (req, res)=>{
  console.log('Returning a 404 from the catch-all route');
  return res.render("templates/404");
});


/*app.get('/users' , (req , res)=>{
  res.render('welcome');
});
*/

app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`);
});

