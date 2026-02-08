const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            require : true
        },
        content : {
            type : String,
        },
    },
    {
        timestamps : true
    }
    
);

module.exports = mongoose.model("note",noteSchema);