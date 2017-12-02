const express=require('express');
const path=require('path');
const cors=require('cors');
const bodyParser=require('body-parser');
const passport=require('passport');
const mongoose=require('mongoose');
const app=express();
const config=require('./config/database.js');
const port=3000;
mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
	console.log('connected on',config.database);
});
mongoose.connection.on('error',function(err){
	console.log('error',err);
});
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(passport.initialize());
app.use(passport.session());
const user=require('./routes/user.js');
app.use('/user',user);
app.get('/',function(req,res){
	res.send("Invalid");
});
app.listen(port,function(){
	console.log("Server Started at" +port);
});