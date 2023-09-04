const User = require('./Model')
const { connect } = require('mongoose')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
require('dotenv').config()


const getAllUsers = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const allusers = await User.find()
        res.json({
            users: allusers
        })
    }

    catch (error) {
        res.status(400).json({
            'message': error.message
        })

    }
}

const getUserByEmail = async (req, res) => {

    const { email } = req.query
    try {
        await connect(process.env.MONGO_URI)
        const user = await User.findOne({ email: email })
        res.json({ user: user })
    }

    catch (error) {
        res.status(400).json({
            'message': error.message
        })

    }
}

const UserByEmail = async (req, res) => {

    const { email } = req.params
    try {
        await connect(process.env.MONGO_URI)
        const user = await User.findOne({ email: email })
        res.json({ user: user })
    }

    catch (error) {
        res.status(400).json({
            'message': error.message
        })

    }
}

const signup = async (req, res) => {
    const { username, password, email, address, contact } = req.body

    try {

        await connect(process.env.MONGO_URI)

        const checkExisting = await User.exists({ email: email })

        if (checkExisting) {
            res.status(208).json({
                message: "User Already Exists"
            })

        }
        else {
            await User.create({ username, email, address, contact, password: await hash(password, 11) })
            res.status(201).json({
                message: 'Signup Successfully'
            })
        }



    }
    catch (error) {
        res.json({
            message: 'Erorr'
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        await connect(process.env.MONGO_URI)

        const checkExistingUser = await User.findOne({ email: email })
        if (!checkExistingUser) {
            res.status(404).json({
                message: "User Not Found"
            })
        }
        else {

            const decryptPass = await compare(password, checkExistingUser.password)
            console.log(decryptPass)
            if (email == checkExistingUser.email && decryptPass) {

                const token = sign({
                    id: checkExistingUser._id,
                    username: checkExistingUser.username,
                    email: checkExistingUser.email,
                    profile: checkExistingUser.profile,
                    role: checkExistingUser.role,
                    address: checkExistingUser.address,
                    contact: checkExistingUser.contact,
                    joining: checkExistingUser.joining
                },
                    process.env.JWT_SECRET
                )

                res.status(200).json({
                    message: "SuccessFully Logined",
                    token: token
                })
            }
            else {
                res.json({
                    message: "Invalid Credentials"
                })
            }

            res.json({
                user: checkExistingUser
            })

        }
    } catch (error) {

    }
}



module.exports = { signup, login, getAllUsers, getUserByEmail, UserByEmail }