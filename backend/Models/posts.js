const mongoose=requie("mongoose");

const postSchema=new mongoose.Schema({

    postUrl:{
        type:String,
        required:"true",
    },
    caption:{
        type:String,
    },
    userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
},
{
    timestamps:true
}
)

module.exports=mongoose.model("Post",postSchema);