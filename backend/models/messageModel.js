const mongoose = require("mongoose");

const messageModel =mongoose.Schema({
    sender:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    content: {type: String , trim:true},
    chat : { type:mongoose.Schema.Types.ObjectId, ref: "Chat"},
},
{timestamps: true}
);  //this will add createdAt and updatedAt as fields in our schema.

const Message = mongoose.model("Message", messageModel);
module.exports = Message;