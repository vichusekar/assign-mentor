const express = require('express')
const { StudentModel } = require('../models/UserSchema')
const { MentorModel } = require('../models/MentorSchema')
const router = express.Router()


//Write API to show all students for a particular mentor

router.get('/all-students/:id', async (req,res) => {
    try {
        let students = await MentorModel.findById(req.params.id)
        if(students)
        {
            res.status(200).send({message: "Data Fetched Successfully", students})
        }
        else
        {
            res.status(200).send({message:'Something went wrong'})
        }
    } catch (error) {
        res.status(500).send({message: "Internal Server Error", error: error?.message})
    }
})

router.get('/all-student', async (req,res) => {
    try {
        let students = await StudentModel.find()
        if(students)
        {
            res.status(200).send({message: "Data Fetched Successfull", students})
        }
        else
        {
            res.status(404).send({message: "Something went wrong"})
        }
    } catch (error) {
        res.status(500).send({message: "INetrnal Server Error", error: error?.message})
    }
})

router.get('/all-mentors', async (req,res) => {
    try {
        let mentors = await MentorModel.find()
        if(mentors)
        {
            res.status(200).send({message: "Data Fetched Successfull", mentors})
        }
        else
        {
            res.status(404).send({message: "Something went wrong"})
        }
    } catch (error) {
        res.status(500).send({message: "INetrnal Server Error", error: error?.message})
    }
})

module.exports = router