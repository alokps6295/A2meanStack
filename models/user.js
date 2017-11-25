const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');
//user schema
const userSchema=mongoose.Schema({
name:{
    type:String
},
email:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}
});
const user=module.exports=mongoose.model('user',userSchema);
module.exports.getUserById=function(id,callback){
    user.findById(id,callback);
}
module.exports.getUserByName=function(username,callback){
    const query={username:username}
    user.findOne(username,callback);
}
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB. 
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}