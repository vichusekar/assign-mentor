const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    name: { type: String, required: true},

    email: {type: String, required: true},

    mobile: {type: String, required: true}
    
},{ collection: 'students', versionKey: false })

let StudentModel = mongoose.model('students', UserSchema)

module.exports =  {StudentModel}