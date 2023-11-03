const express = require('express')
const { StudentModel } = require('../models/UserSchema')
const { MentorModel } = require('../models/MentorSchema')
const router = express.Router()


//Write API to create Student

router.post('/student-register', async (req, res) => {

    let student = await StudentModel.findOne({ email: req.body.email })
    try {
        if (student)
            res.status(400).send({ message: `The student with ${req.body.email} already exist` })
        else {
            let newStudent = await StudentModel.create(req.body)
            newStudent.save()
            res.status(200).send({ message: 'Registered Successfully' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })
    }
})



//Write API to create Mentor

router.post('/mentor-register', async (req, res) => {

    let mentor = await MentorModel.findOne({ email: req.body.email })
    try {
        if (mentor) {
            res.status(400).send({ message: `The mentor ${req.body.email} already exist` })
        }
        else {
            let newMentor = MentorModel.create(req.body)
            res.status(200).send({ message: 'Registered Successfully' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })
    }
})



//Select one mentor and Add multiple Student 

router.post('/assign', async (req, res) => {
    try {
        let mentor = await MentorModel.findOne({ email: req.body.email })

        if (!mentor) {
            let newUser = await MentorModel.create(req.body)
            newUser.save()
            res.status(200).send({ message: 'Assigned Successfully', newUser })
        }
        else {
            res.status(404).send({ message: `Mentor of ${req.body.email} already exists` })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Internal Server Error', error: error?.message })
    }
})


router.post('/change-student/:id', async (req,res) => {
    try {
        let student = await MentorModel.findById(req.params.id)
        if(student)
        {

            res.status(200).send({message:'updated successfull'})
        }
        else
        {
            res.status(404).send({message: "something went wrong"})
        }
    } catch (error) {
        res.status(500).send({message:"internal server error", error: error?.message})
    }
})




module.exports = router