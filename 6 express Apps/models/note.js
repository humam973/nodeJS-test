const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title : {
        type : String ,
        required : true
    } ,
    noteSnippet : {
        type : String ,
        required : true
    } ,
    noteContant : {
        type : String ,
        required : true
    }
} , {timestamps : true}) ;

const Note = mongoose.model('note' , noteSchema)

module.exports = Note