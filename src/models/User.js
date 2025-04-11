const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    Username:{ type: String, required:true, unique:true},
    Email: { type: String, required:true, unique:true},
    Password:{ type: String, required:true},
    avatar:{ type: String,default:''},
    bio:{ type: String, default:''}
},{ timestamps: true})

module.exports= mongoose.model('User',UserSchema)