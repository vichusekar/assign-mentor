const mongoose = require('mongoose')

function validateEmail(e){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
  } 


  function validateMobile(e){      
    var mobilePattern = /^(0|91)?[6-9][0-9]{9}$/;
    return mobilePattern.test(e); 
  } 

  
let MentorSchema = new mongoose.Schema({

    mentorName: {type: String, required: true},

    students: [
        {name:  {type: String, required: true }, email:{type: String, required: true, validate: {validator: validateEmail, message:'Enter valid email' }}} 
    ],

    email: {type: String, required: true, validate: {validator: validateEmail, message:'Enter valid email'}},

    mobile: {type: String, required: true, validate: {validator: validateMobile, message:'Enter valid mobile'}}

},{collection: 'mentors', versionKey: false})

let MentorModel = mongoose.model('mentors', MentorSchema)

module.exports = {MentorModel}