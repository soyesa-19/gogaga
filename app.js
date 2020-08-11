const express = require('express');
const bodyParser = require('body-parser');
const homeRouter =  require('./routes/homeRoute');
const userRouter = require('./routes/userRoute');
const mongoose = require('mongoose');
const path = require('path')

const app = express()

const connect = mongoose.connect('mongodb+srv://admin-soyesa:soyesa123@cluster0.udx4r.mongodb.net/gogaga', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  })

connect.then((db)=>{
      console.log('Successfully connected to mongoDB Atlas')
  }, (err)=>{console.log(err)})


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: true}));




app.use('/', homeRouter);
app.use('/user', userRouter);


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, ()=>{
    console.log('server started at on herku')
})