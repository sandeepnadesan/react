const mongoose = require('mongoose')

const TodoModel = new mongoose.Schema({
    name:{
        type:String
    },
    iscompleted:{
        
        type:Boolean

    }
});

module.exports =mongoose.model("Todo",TodoModel)