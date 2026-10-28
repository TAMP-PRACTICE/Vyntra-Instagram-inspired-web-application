
const mongoose=require("mongoose");

const storySchema=new mongoose.Schema({

    storyUrl:{
        type:String
    },
    mention:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})


module.exports=mongoose.model("Story",storySchema);