
const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
    },
    bio:{
        type:String
    },
    accountType:{
        type:String,
        enum:["Public","Private"]
    },
    resetToken:{
        type:String,
    },
    resetTokenTime:{
        type:String
    }
},
{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema);