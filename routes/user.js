const express=require('express');
const router=express.Router();
const passport=require('passport');
const user=require('../models/user')
router.post('/register',function(req,res,next){
	let newUser=new user({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});
	user.addUser(newUser);
	res.send("register");
});
router.post('/authenticate',function(req,res,next){
	res.send("authenticate");
});
router.get('/profile',function(req,res,next){
	res.send("profile");
});

module.exports=router;