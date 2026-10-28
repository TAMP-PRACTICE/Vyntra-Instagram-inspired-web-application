const mongoose=require("mongoose");

const followerSchema=new mongoose.Schema({
    
    followerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    followeeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
   
},
{
    timestamps:true
})

module.exports=mongoose.model("Follower",followerSchema);